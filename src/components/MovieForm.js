import React, { useState } from "react";
import "./../App.css";

const MovieForm = ({ onCancel, onSubmit }) => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        rating: "",
        posterURL: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newMovie = {
            id: Date.now(),
            ...formData
        };
        onSubmit(newMovie);
    };

    return (
        <div className="form-container"> 
        <form onSubmit={handleSubmit}>
            <label className="form-label">
                Title:
                <input
                    className="form-input"
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
            </label>
            <label className="form-label">
                Description:
                <textarea
                    className="form-textarea"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />
            </label>
            <label className="form-label">
                Rating:
                <input
                    className="form-input"
                    type="number"
                    name="rating"
                    value={formData.rating}
                    onChange={handleChange}
                    required
                />
            </label>
            <label className="form-label">
                Poster URL:
                <input
                    className="form-input"
                    type="text"
                    name="posterURL"
                    value={formData.posterURL}
                    onChange={handleChange}
                    required
                />
            </label>
            <button className="form-button" type="submit">Add</button>
            <button className="form-button" type="button" onClick={onCancel}>Cancel</button>
        </form>
        </div>
    );
};

export default MovieForm;
