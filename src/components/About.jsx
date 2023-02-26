import React from 'react'
import mypic from '../assets/myself.jpeg'
import gitlogo from '../assets/git.png'
import insta from '../assets/igbw.png'
import lin from '../assets/lnked.png'
import '../css/Aboutus.css'
export default function About() {
    return (
        <div className="container text-center form-signin w-100 m-auto py-3">
            <div className="row featurette">
                <div className="col-md-7 order-md-2">
                    <h1 className="featurette-heading  lh-1">About Myself </h1>
                    <p className="lead">Hello everyone , my name is Rajarshi Ray. I am a 3rd year student currently pursuing my B-Tech in Biotechnology in University of Engineering & Kolkata.I have made this website as a project which acts a simple UI for calculating BMI and nutritional contents in a user's desired food along with an exercise guidance support which will give you a wide range of exercises based on you desired muscle type which can be highly beneficial for maintaining proper health and well being.</p>
                    <h1 className="featurette-heading  lh-1">Contact Me </h1>
                    <span className="img1">
                        <a href="https://github.com/RajarshiRay25">
                            <img src={gitlogo} width="40px" height="40px" alt="" />
                        </a>
                        <a href="https://www.instagram.com/skylord_raj90/">
                            <img src={insta} className="mx-4 my-3" width="40px" height="40px" alt="" />
                        </a>
                        <a href="https://linkedin.com/in/rajarshi-ray-5678721b7">
                            <img src={lin} width="40px" height="40px" alt="" />
                        </a>


                    </span>
                </div>
                <div className="col-md-5 order-md-1">
                    <img src={mypic} alt="Description of your image" className="bd-placeholder-img bd-placeholder-img-md featurette-image img-fluid mx-auto" width="400" height="400" style={{ border: "2px solid", borderRadius: "50%", boxShadow: '2px 5px 5px rgba(0, 0, 0, 0.8)' }} />
                </div>
            </div>
        </div>
    )
}
