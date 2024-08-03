import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">iNews</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 pt-3 pt-md-0 mt-lg-1">
                        <li className="nav-item px-md-2">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item px-md-2">
                        <a className="nav-link" href="/about-us">About Us</a>
                        </li>
                    </ul>
                    
                    {/* Dark mode switch */}
                    <div className='mode position-relative'>
                        <img className='modeIco' src="" alt=''></img>
                        <div className='modeChangeAlert'>Dark</div>
                    </div>
                </div>
            </div>
        </nav>
    )
  }
}

export default Navbar




// const Navbar = (props) => {

//     // Dark Mode Enable
//     const [isDay, setIsDay] = useState(true);
//     const [isDayTxt, setIsDayTxt] = useState('Switch to Light Mode');
//     const toggleMode = () => {
//         isDay ? setIsDayTxt('Switch to Light Mode') : setIsDayTxt('Switch to Dark Mode')
//         setIsDay(!isDay);
//         document.body.classList.toggle('dark-mode');
//         document.body.classList.toggle('light-mode');
//     }

    
//     return(
//         <>
//             <nav className="navbar navbar-expand-lg">
//                 <div className="container-fluid">
//                     <Link className="navbar-brand" to="/">iNews</Link>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav me-auto mb-2 mb-lg-0 pt-3 pt-md-0 mt-lg-1">
//                             <li className="nav-item px-md-2">
//                             <Link className="nav-link active" aria-current="page" to="/">Home</Link>
//                             </li>
//                             <li className="nav-item px-md-2">
//                             <Link className="nav-link" to="/about-us">About Us</Link>
//                             </li>
//                         </ul>
                        
//                         {/* Dark mode switch */}
//                         <div className='mode position-relative' onClick={toggleMode}>
//                             <img className='modeIco' src={isDay ? nightIco : dayIco} alt=''></img>
//                             <div className='modeChangeAlert'>{isDayTxt}</div>
//                         </div>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     );
// }

// export default Navbar