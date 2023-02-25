import React, { useState } from 'react';

function Exercise() {
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);

    const handleSearch = (event) => {
        event.preventDefault();
        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": "2315b3caa0msha9ee49c3a491311p19cf07jsnb2e73a7b0332",
                "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
            },
        };
        fetch(
            `https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=${searchTerm}`,
            options
        )
            .then((response) => response.json())
            .then((data) => {
                setResults(data);
            })
            .catch((error) => {
                console.error(error);
            });
    };
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="container text-center form-signin w-100 m-auto">
            <h1>Exercise Platform</h1>
            <div className="col-md-8 mx-auto">
                <p className="text-justify lead mb-4">Exercise is essential for maintaining a healthy body and mind. Regular exercise helps to strengthen muscles, reduce the risk of chronic diseases, and improve mental health. With so many different types of exercises, it can be challenging to figure out which ones are best for you. That's where our app comes in. We provide a comprehensive list of exercises, along with their muscle groups, difficulty level, and equipment required. Whether you're a beginner or an experienced fitness enthusiast, our app has something for everyone. So start exploring our collection of exercises and discover the benefits of a healthy lifestyle. So enter the muscle group you prefer to train and we will guide you with some effective exercises!!</p>
            </div>
            <form onSubmit={handleSearch}>
            <div className="form-floating mb-3 w-50 m-auto">
                <input
                    type="text"
                    className="form-control"
                    value={searchTerm}
                    onChange={handleChange}
                />
                <label htmlFor="floatingInput">Enter Muscle Group Name</label>
            </div>
                <button className="btn btn-primary my-3" type='submit'>Search Exercises</button>
            </form>
            {results.length > 0 &&(<h3>Detailed Information Regarding Your Excercises</h3>)}
            {results.length > 0 && (
                <table className='my-2 table table-bordered'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Muscle</th>
                            <th>Equipment</th>
                            <th>Difficulty</th>
                            {/* <th>Instructions</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((exercise) => (
                            <tr key={exercise.name}>
                                <td>{exercise.name}</td>
                                <td>{exercise.type}</td>
                                <td>{exercise.muscle}</td>
                                <td>{exercise.equipment}</td>
                                <td>{exercise.difficulty}</td>
                                {/* <td>{exercise.instructions}</td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            {results.length > 0 && (
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Instructions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((exercise) => (
                            <tr key={exercise.name}>
                                <td>{exercise.name}</td>
                                <td>{exercise.instructions}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
export default Exercise;
