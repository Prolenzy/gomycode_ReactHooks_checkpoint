import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList'; 
import './App.css';  
import MovieForm from './components/MovieForm';
import Home from './components/Home';
import MovieCard from './components/MovieCard';


function App() {
  return (
    <Router> 
    <div className="App">
      <h1 style={{textAlign: 'center', color: 'darkBlue', fontSize: 50}}>My Movie App</h1> 
      <Routes> 
      <Route path='/' element={<Home />} />  
      <Route path='/movie/:id' element={MovieCard} />
      <Route path='/movies' element={<MovieList />} />         
      <Route path='/add-movie' element={<MovieForm />} />         
      </Routes>       
    </div>
    </Router>
  );
}

export default App;
