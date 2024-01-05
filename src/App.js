import React from 'react';
import './App.css'; 
 
import MovieList from './components/MovieList';
import MovieForm from './components/MovieForm';

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign: 'center', color: 'darkBlue'}}>My Movie App</h1> 
      <MovieList />    
      <MovieForm /> 
    </div>
  );
}

export default App;
