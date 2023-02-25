import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
    return (
        <div>
            <div className="px-4 py-2 my-2 text-center">
                <h1 className="display-6 fw-bold">Welcome To Our Fitness & Health Monitoring App</h1>
                <div className="col-lg-6 mx-auto">
                    <p className='lead mb-4 text-justify'>
                        Welcome to our innovative online platform for tracking your body mass index (BMI) and nutritional intake! Our website provides you with the tools and resources to easily and accurately monitor your health and wellness. Whether you're looking to lose weight, gain muscle, or just maintain a healthy lifestyle, our site can help you achieve your goals. With our user-friendly BMI calculator and nutritional tracking features, you can track your progress and make informed decisions about your health. Join our community of fitness enthusiasts and health-conscious individuals today and start your journey towards a healthier you!
                    </p>
                    <p className='lead mb-4 text-justify'>
                        Moreover we also have an Exercise Platform, where we provide you with personalized and effective exercise plans to help you achieve your fitness goals. Our platform allows you to easily search for exercises by muscle group, equipment, difficulty level, and more. Our website provides you with the best exercises for each muscle group, ensuring that you get the most out of your workout. Whether you are a beginner or an experienced fitness enthusiast, our platform has something for everyone. So, what are you waiting for? Let's get started on your fitness journey today!
                    </p>
                    <Link to="/bmi">
                        <button className="btn btn-primary rounded my-0.5">Get Your BMI Count</button>
                    </Link>
                    <Link to="/nutcal">
                        <button className="btn btn-success rounded my-0.5 mx-2">Get Your Nutrient Count</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
