import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
        <div className='header'>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand" to="/">iNews</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 pt-3 pt-md-0 mt-lg-1 ms-lg-3">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
                        </ul>
                        
                        {/* Dark mode switch */}
                        <div className='mode position-relative'>
                            <img className='modeIco' src="" alt=''></img>
                            <div className='modeChangeAlert'>Dark</div>
                        </div>
                    </div>
                </div>
            </nav>

            <div className='space-divder mb-4'></div>
        </div>
        
        
    )
  }
}

export default Navbar