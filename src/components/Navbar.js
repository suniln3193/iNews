import React, { useState } from 'react'
import dayIco from '../img/day.svg';
import nightIco from '../img/night.svg';


const Navbar = (props) => {

    // Dark Mode Enable
    const [mode, setMode] = useState('dark')
    const [modeText, setModeText] = useState('Dark Mode')
    const [modeImg, setModeImg] = useState(`${props.dayIco}`)

    const toggleMode = () => {
        if( mode === 'dark'){
            setMode('light');
            setModeText('Light Mode')
            setModeImg('../img/night.svg')
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
            
        }else{
            setMode('dark');
            setModeText('Dark Mode')
            setModeImg('dayIco')
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
        }
    }

    
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">iNews</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 pt-3 pt-md-0">
                            <li className="nav-item px-md-2">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item px-md-2">
                            <a className="nav-link" href="/">About Us</a>
                            </li>
                        </ul>
                        
                        {/* Dark mode switch */}
                        <div className='mode' onClick={toggleMode}>
                            <img className='modeIco' src={dayIco} ></img>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar