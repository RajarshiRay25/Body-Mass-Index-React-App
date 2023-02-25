import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import BMIform from './components/BMIform'
import { Routes, Route } from "react-router-dom";
function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/bmi" element={<BMIform />}></Route>
      </Routes>
    </div>
  )
}

export default App
