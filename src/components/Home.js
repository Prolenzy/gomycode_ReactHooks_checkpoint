import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

function Home() {
    return (
        <div className='homepage-container'>        
            <div> 
                <p className='typewriter-text'>Welcome to My Movie App!</p> 
                <p className='typewriter-text'>This is the Homepage of my Movie Application.</p> 
                <p className='typewriter-text'>Explore my Movie Collection or Add a New Movie!</p>
            </div>  
            <br /> <br />
            <Link to="/movies" className='button-link'>Explore Movies</Link> {/* Specify the path to navigate to */}        
        </div>
    );
}

export default Home;
