import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Thirteenth navbar example">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse d-lg-flex" id="navbarsExample11">
                        <Link className="navbar-brand col-lg-3 me-0" to="/">Fitness Monitoring Application</Link>
                        <ul className="navbar-nav col-lg-6 justify-content-lg-center">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/bmi">BMI Calculator</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/nutcal">Nutrients Calculator</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/exercise">Exercise</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
