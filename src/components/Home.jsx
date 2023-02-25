import React from 'react'

export default function Home() {
    return (
        <div>
            <div className="px-4 py-2 my-2 text-center">
                <h1 className="display-6 fw-bold">Welcome To Our BMI Calculator</h1>
                <div className="col-lg-6 mx-auto">
                    <p className='lead mb-4 text-justify'>
                        Our BMI calculator is a simple tool that can help you assess your body mass index and evaluate your weight status. BMI is an important measure of your body fat and can provide an estimate of your overall health.

                        To use our BMI calculator, simply enter your height and weight in the fields provided, and our calculator will automatically calculate your BMI for you. Based on your BMI, our calculator will provide you with an estimate of your weight status, such as whether you are underweight, normal weight, overweight, or obese.
                    </p>
                    
                </div>
            </div>
        </div>
    )
}
