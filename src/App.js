import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar'
import AboutUs from './components/AboutUs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
    return (
      <>
      <Router>
        <div>
          <Navbar />
          
          <div className='main_wrapper container-fluid pt-3'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
            </Routes>
          </div>
        </div>
      </Router>
      </>
    );
}

export default App;
