import axios from "axios";
import { useState } from "react";

const Create = () => {

    const [title, setTitle] = useState('');//state for movie title
    const [year, setYear] = useState('');//state for movie year
    const [poster, setPoster] = useState('');//state for poster URL

   
    const handleSubmit = (e) => {
        e.preventDefault();//prevent default form submission
        
        const movie = {title, year, poster};//create movie object from values
        console.log(movie);
        
        //send POST request to server
        axios.post('http://localhost:4000/api/movies', movie)
        .then((res) => console.log(res.data))//log server response
        .catch();
    };

    return (
        <div>
            <h3>Hello from create component!</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Add Movie Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Movie Year: </label>
                    <input type="text"
                        className="form-control"
                        value={year}
                        onChange={(e) => { setYear(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Movie Poster: </label>
                    <input type="text"
                        className="form-control"
                        value={poster}
                        onChange={(e) => { setPoster(e.target.value) }}
                    />
                </div>
                <div>
                    <input type="submit" value="Add Movie"></input>
                </div>
            </form>
        </div>
    );
}
export default Create;