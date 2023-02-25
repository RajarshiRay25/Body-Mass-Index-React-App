import React, { useState } from 'react'
import BMI from "../assets/BMIIMG.png"
export default function BMIform() {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [result, setResult] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '2315b3caa0msha9ee49c3a491311p19cf07jsnb2e73a7b0332',
                'X-RapidAPI-Host': 'body-mass-index-bmi-calculator.p.rapidapi.com'
            }
        };

        fetch(`https://body-mass-index-bmi-calculator.p.rapidapi.com/metric?weight=${weight}&height=${height}`, options)
            .then(response => response.json())
            .then(response => setResult(response.bmi.toFixed(2)))
            .catch(err => console.error(err));
    }
    return (
        <div className='container text-center form-signin w-100 m-auto'>
            <h1>BMI Calculator</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-floating mb-3 w-50 m-auto'>
                    <input type="number" className='form-control ' id="weight" name="weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
                    <label htmlFor="floatingInput">Weight (kg)</label>
                </div>
                <div className='form-floating  w-50 m-auto'>
                    <input type="number" id="height" className='form-control' name="height" value={height} onChange={(e) => setHeight(e.target.value)} />
                    <label htmlFor="floatingInput">Height (m)</label>
                </div>
                <button className="btn btn-primary my-4" type="submit">Get Your BMI</button>
            </form>
            {result && <h5>Your BMI is: {result}</h5>}
            <figure className="figure">
                <figcaption className="figure-caption"><h6>Determine Your Weight Category</h6></figcaption>
                <img src={BMI} className="figure-img img-fluid rounded" alt="..." />
            </figure>
            {/* <img src={BMI} class="img-fluid" alt="..."></img> */}
        </div>
    )
}
