import logo from './logo.svg';
import './App.css';
import "../src/component/movies"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DirectorAndMovies from '../src/component/movies';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<DirectorAndMovies/>}/>
      </Routes>
    </BrowserRouter>
    </div>
   
  );
}

export default App;
