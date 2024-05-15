import React, { useState } from "react";
import "../component/movies.css";

const DirectorAndMovies = () => {
    const [directors, setDirectors] = useState([]);
    const [newDirector, setNewDirector] = useState('');
    const [newMovie, setNewMovie] = useState(""); 

    const addItem = () => {
        if (newDirector.trim() && newMovie.trim()) {
            setDirectors([...directors, { director: newDirector.trim(), movie: newMovie.trim() }]);
            setNewMovie(""); 
            setNewDirector("");
        }
    };

    const removeItem = (index) => {
        const updatedDirectors = [...directors];
        updatedDirectors.splice(index, 1);
        setDirectors(updatedDirectors);
    };

    return (
        <div>
            <h2>Director and Movies</h2>
            <div>
                <input type="text" placeholder="Enter director name" value={newDirector} onChange={(e) => setNewDirector(e.target.value)} />
                <input type="text" placeholder="Enter movie name" value={newMovie} onChange={(e) => setNewMovie(e.target.value)} />
                <button style={{backgroundColor:"green"}} onClick={addItem}>Add</button>
            </div>
            <ul>
                {directors.map((item, index) => (
                    <li key={index}>
                        <span style={{ color: index % 2 === 0 ? "green" : "red" }}>{item.director}</span>
                        <span> - {item.movie}</span> 
                        <button 
                       style={{backgroundColor:"red"}} onClick={() => removeItem(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DirectorAndMovies;
