import React from "react";

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-container">
            {movie.posterURL && ( 
            <img className="poster" src={movie.posterURL} alt={movie.title} /> 
            )}
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
            </div>
        </div>
    );
};

export default MovieCard;