import './App.css';
import Navbar from './components/Navbar'


import React, { Component } from 'react'
import News from './components/News';

export class App extends Component {
  render() {
    return (
      <>
      <Navbar />
      <News />
      </>
    )
  }
}

export default App


// function App() {
//     return (
//       <>
//       <Router>
//         <div>
//           <Navbar />
          
//           <div className='main_wrapper container-fluid pt-3'>
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/about-us" element={<AboutUs />} />
//             </Routes>
//           </div>
//         </div>
//       </Router>
//       </>
//     );
// }

// export default App;
