import React, { useState } from 'react';

function Exercise() {
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);

    const handleSearch = () => {
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

    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            {results.length > 0 && (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Muscle</th>
                            <th>Equipment</th>
                            <th>Difficulty</th>
                            <th>Instructions</th>
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
