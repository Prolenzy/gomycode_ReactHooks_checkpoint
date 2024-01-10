import React from "react";
import { Link } from "react-router-dom";
import '../App.css'; 

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-container">
            <div className="movie-content">
                {/* Flex to the Left */}
                {movie.posterURL && ( 
                    <img className="poster" src={movie.posterURL} alt={movie.title} /> 
                )}

                {/* Flex to the Center */}
                <div className="movie-details"> 
                    {movie.title && movie.title.trim() !== '' ? (
                        <h2 className="movie-title">{movie.title}</h2>
                    ) : (
                        <h2 className="movie-title">Unknown Title</h2>
                    )}
                    {movie.description && (
                        <p className="movie-description">{movie.description}</p>
                    )}
                    {movie.rating && (
                        <p className="movie-rating">Rating: {movie.rating}</p>
                    )}
                    <Link to='/' className="button-link" >Back to Home</Link>
                </div>

                {/* Flex to the Right */}
                {movie.trailerLink && (
                    <iframe
                        width='360'
                        height='175'
                        src={movie.trailerLink}
                        title="YouTube video player"
                        frameborder='0'
                        allow="autoplay; encrypted-media"
                        allowFullScreen>
                    </iframe>
                )}
            </div>
        </div>
    );
};

export default MovieCard;
