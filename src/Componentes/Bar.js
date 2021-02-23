import React from 'react';
import './Bar.css';
import { Link } from 'react-router-dom';
import materiasContext from '../Context.js';

function Bar() {

  function showList(materias){
    let res = '';
    
    console.log(materias);
    return res;
  }

  return (
    <div id="Bar">
      <ul>
        <li>Materias: </li>
        <br/>
        <materiasContext.Consumer>
          {materias => (
          <div>
            {materias.map((mat, i) => {
              return <Link key={i} to={'/' + mat}><li>{mat}</li></Link>
            })}
          </div>)}
        </materiasContext.Consumer>
        
      </ul>
    </div>
  );
}

export default Bar;
