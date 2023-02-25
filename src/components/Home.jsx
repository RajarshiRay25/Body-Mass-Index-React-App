import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
    return (
        <div>
            <div className="px-4 py-2 my-2 text-center">
                <h1 className="display-6 fw-bold">Welcome To Our Fitness & Health Monitoring App</h1>
                <div className="col-lg-6 mx-auto">
                    <p className='lead mb-4 text-justify'>
                        Welcome to our innovative online platform for tracking your body mass index (BMI) and nutritional intake! Our website provides you with the tools and resources to easily and accurately monitor your health and wellness. Whether you're looking to lose weight, gain muscle, or just maintain a healthy lifestyle, our website can help you achieve your goals.

                        Our BMI calculator is easy to use and provides instant results based on your height and weight. You can set a goal weight and track your progress over time, seeing how your BMI changes as you work towards your target. Our site also includes nutritional tracking features, allowing you to log your daily meals and monitor your intake of key macronutrients like protein, carbohydrates, and fat.
                        We believe that everyone should have access to the tools they need to take control of their health and wellness, and our server is designed to do just that. Whether you're a fitness enthusiast or just looking to make healthier choices in your daily life, our BMI and nutrition monitoring app is the perfect solution to help you achieve your goals.
                    </p>
                    <Link to="/bmi">
                        <button className="btn btn-primary rounded my-4">Get Your BMI Count</button>
                    </Link>
                    <Link to="/nutcal">
                        <button className="btn btn-success rounded my-4 mx-2">Get Your Nutrient Count</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
