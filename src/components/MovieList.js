import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import MovieCard from "./MovieCard";
import Filter from "./Filter";
import MovieForm from "./MovieForm";

const MovieList = () => {
    const navigate = useNavigate();
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [filterTitle, setFilterTitle] = useState("");
    const [filterRate, setFilterRate] = useState("");
    const [isAddingMovie, setIsAddingMovie] = useState(false);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
                    params: {
                        api_key: '42fa30ce53fe1b08691025939893204d',
                        language: 'en-US',
                        page: 1,
                    },
                });

                // Extracting required details from each movie; that's title, description, posterURL, and rating.
                const moviesData = response.data.results.map(movie => ({
                    id: movie.id,
                    title: movie.title,
                    description: movie.overview,
                    rating: movie.vote_average,
                    posterURL: `https://image.tmdb.org/t/p/w300${movie.poster_path}`,  
                    trailerLink: `https://www.youtube.com/embed/${movie.key}` // Assuming movie.key provides the YouTube video ID
                }));

                setMovies(moviesData);
                setFilteredMovies(moviesData);
            } catch(error) {
                console.error('Error fetching movies:', error);
            }
        };
        fetchMovies();
    }, []);

    useEffect(() => {
        let filtered = movies;

        if (filterTitle) {
            filtered = filtered.filter(movie => movie.title && movie.title.toLowerCase().includes(filterTitle.toLowerCase())
            );
        }
        if (filterRate !== null && filterRate !== "") {
            const parsedFilterRate = parseFloat(filterRate);

            filtered = filtered.filter(movie => movie.rating !== undefined && movie.rating >= parsedFilterRate
            );
        }

        setFilteredMovies(filtered);
    }, [movies, filterTitle, filterRate]);

    const handleAddMovie = () => {
        setIsAddingMovie(true);  // Display the movie form
    };

    const handleCancelAddMovie = () => {
        setIsAddingMovie(false);  // Hide the movie form
    };

    const handleSubmitMovie = (newMovie) => {
        setMovies(prevMovies => [...prevMovies, newMovie]);  // Add the new movie to the list
        setIsAddingMovie(false);  // Hide the movie form
    };
    const handleMovieClick = (movieId) => {
        navigate.push(`/movie/${movieId}`);
    };

    return (
        <div className="movie-controls"> 
            <Filter
            filterTitle={filterTitle}
            setFilterTitle={setFilterTitle}
            filterRate={filterRate}
            setFilterRate={setFilterRate}
            />
            <button className="add-movie-button" onClick={handleAddMovie}> 
                    Add Movie
                    </button>
                    {isAddingMovie && (
                        <MovieForm
                        onCancel={handleCancelAddMovie}
                        onSubmit={handleSubmitMovie} />
                    )}
            <div className="movie-list">
                {filteredMovies.map((movie) => (
                    <MovieCard
                    key={movie.id} 
                    movie={movie} 
                    onClick={() => handleMovieClick(movie.id)} />
                ))}
            </div> 
        </div>
    );
};

export default MovieList;