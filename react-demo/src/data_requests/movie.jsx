import useState, { useEffect } from "react";
import axios from 'axios';

function movieSearch (){
    const [movieName, setMovieName] = useState ("");
    const [info, setInfo] = useState();
    const [error, setError]= useState(null);
useEffect(()) => {
    console.log("loaded");
    const getMovie = async () => {
        try {
            const res = await axios.get("www.omdbapi.com" + movieName);
            console.log(res);
            setInfo(res.data);
        }catch(err)
    }
    getMovie();
}, [movieName]);

if (movieName){
    return(
        <h1>{movieName.name}</h1>
    );
} else{
    return <h2>NOT FOUND</h2>
}


}

export default movieSearch;

