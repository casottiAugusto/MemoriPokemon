import React from 'react';
import { Link } from 'react-router-dom';
import './app.css';


function App() {
  return (
    < div className="container" >
      <div className="figura" > </div>
      <div className="btn-grup">
        <Link to="/memoria" className='btn'>Novo jogo</Link>

      </div>
    </div>
  )
 
}


export default App;
