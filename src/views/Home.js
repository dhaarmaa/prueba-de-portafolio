import React from 'react';
import Navigation from '../Navigation';
import '../style.css';

function Home() {
    return (
      <div className="Home">
      <Navigation/>
        <div id="font-home">
        <h1>Dharma Herrera Martínez</h1>
        <h2>Front end developer</h2>
        </div>
      <div className="font-home">
      <p>
            Contactame:
            dharma.herrera@gmail.com 
            <a href="">Linkeedin</a> 
            <a>GitHub</a>
        </p>
      </div>
        
      

      </div>
    );
  }
  
  
  export default Home;
  