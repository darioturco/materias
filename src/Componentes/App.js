import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Bar from './Bar.js';
import Materia from './Materia.js';
import materiasContext from '../Context.js';

var materias = [];

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <materiasContext.Provider value={materias}>
          <Bar />
          <Route path='/:mat' component={Materia}/>
        </materiasContext.Provider>
      </BrowserRouter>
    </div>
  );
}

