import React, { useState } from "react";

function Nutrientsform() {
  const [food, setFood] = useState("");
  const [results, setResults] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "2315b3caa0msha9ee49c3a491311p19cf07jsnb2e73a7b0332",
        "X-RapidAPI-Host": "nutrition-by-api-ninjas.p.rapidapi.com",
      },
    };

    fetch(
      `https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=${food}`,
      options
    )
      .then((response) => response.json())
      .then((data) => setResults(data))
      .catch((error) => console.log(error));
  };

  const handleChange = (event) => {
    setFood(event.target.value);
  };

  return (
    <div className="container text-center form-signin w-100 m-auto">
        <h1>Nutrients Calculator</h1>
        <div className="col-md-8 mx-auto">
        <p className="text-justify lead mb-4">The first step towards a healthy lifestyle is maintaining your calories.What you eat defines what you are.Thus we present a nutrient counter to help you track the nutrient and calorie counts of what you consume in your daily life.Enter the name of your food you consume and you will get approximate results containing all the nutrient values your food has.</p>
        </div>
      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3 w-50 m-auto">
          <input
            type="text"
            className="form-control"
            id="food"
            value={food}
            onChange={handleChange}
          />
          <label htmlFor="floatingInput">Enter food</label>
        </div>
        <button style={{boxShadow: '0 5px 5px rgba(0, 0, 0, 0.3)'}} className="btn btn-dark my-4" type="submit">Get Nutrient Values</button>
      </form>
      {results.length > 0 && (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Calories</th>
              <th>Serving Size (g)</th>
              <th>Total Fat (g)</th>
              <th>Saturated Fat (g)</th>
              <th>Protein (g)</th>
              <th>Sodium (mg)</th>
              <th>Potassium (mg)</th>
              <th>Cholesterol (mg)</th>
              <th>Total Carbohydrates (g)</th>
              <th>Dietary Fiber (g)</th>
              <th>Sugar (g)</th>
            </tr>
          </thead>
          <tbody>
            {results.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.calories}</td>
                <td>{item.serving_size_g}</td>
                <td>{item.fat_total_g}</td>
                <td>{item.fat_saturated_g}</td>
                <td>{item.protein_g}</td>
                <td>{item.sodium_mg}</td>
                <td>{item.potassium_mg}</td>
                <td>{item.cholesterol_mg}</td>
                <td>{item.carbohydrates_total_g}</td>
                <td>{item.fiber_g}</td>
                <td>{item.sugar_g}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Nutrientsform;
