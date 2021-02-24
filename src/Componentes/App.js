import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Bar from './Bar.js';
import Materia from './Materia.js';
import materiasContext from '../Context.js';

/*var materias = [{nombre: 'Analisis Matematico', description: 'una materia muy linda', temas: 'Funciones multi variables', faltantes: 'analisis diferencial', dificultad: 8, final: 9},
{nombre: 'Algebra', description: 'No cursada', temas: '', faltantes: 'analisis diferencial', dificultad: 8, final: 8},
{nombre: 'Probabilidad', description: 'No cursada', temas: '', faltantes: 'analisis diferencial', dificultad: 7, final: 8},
{nombre: 'Algoritmos 1', description: 'No cursada', temas: '', faltantes: '', dificultad: 5, final: 2},
{nombre: 'Algoritmos 2', description: 'No cursada', temas: '', faltantes: '', dificultad: 7, final: 0},
{nombre: 'Algoritmos 3', description: 'No cursada', temas: '', faltantes: '', dificultad: 0, final: 0},
{nombre: 'Metodos Numericos', description: 'No cursada', temas: '', faltantes: '', dificultad: 9, final: 6},
{nombre: 'Organizacion 1', description: 'No cursada', temas: '', faltantes: '', dificultad: 7, final: 8},
{nombre: 'Organizacion 2', description: '', temas: '', faltantes: '', dificultad: 10, final: 4},
{nombre: 'Sistemas Operativos', description: 'No cursada', temas: '', faltantes: '', dificultad: 5, final: 0},
{nombre: 'Redes', description: 'No cursada', temas: '', faltantes: '', dificultad: 0, final: 0},
{nombre: 'Bases de datos', description: 'No cursada', temas: '', faltantes: '', dificultad: 0, final: 0},
{nombre: 'Logica', description: 'No cursada', temas: '', faltantes: '', dificultad: 0, final: 0},
{nombre: 'Ingenieria 1', description: 'No cursada', temas: '', faltantes: '', dificultad: 0, final: 0},
{nombre: 'Ingenieria 2', description: 'No cursada', temas: '', faltantes: '', dificultad: 0, final: 0},
{nombre: 'Teoria de lenguajes', description: 'No cursada', temas: '', faltantes: '', dificultad: 0, final: 0},
{nombre: 'Paradigmas de programacion', description: 'No cursada', temas: '', faltantes: '', dificultad: 0, final: 0}];*/



export default function App() {

  var [materias, setMaterias] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:8080/materias', {method: 'POST'}).then(res => {
      res.json().then((data) => {
        setMaterias(data.data);
      }).catch(() => {
        console.log("Error al cargar los datos.");
      });
    });
  }, []);
  
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

