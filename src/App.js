import {useEffect} from "react";

import './App.css';
import SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=36f5b6e9';

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data);
    }

    useEffect(() =>{
        searchMovies('Spiderman');
    }, []);

    return (
        <div>
            <h1>MovieLand</h1>
        </div>
    );
}

export default App;