import './Materia.css';
import materiasContext from '../Context.js';

function Materia(props) {

  function getIndex(materias, mat){
    let res = -1;
    for(let i = 0 ; i<materias.length && res == -1 ; i++){
      if(materias[i].nombre == mat) res = i;
    }
    return res;
  }

  return (
    <div id="Materia">
      <materiasContext.Consumer>
        {(materias) => {
        let index = getIndex(materias, props.match.params.mat);
        if(index == -1){
          return (<h2>Materia no encontrada.</h2>);
        }else{
          return(
            <>
              <h2>{props.match.params.mat}</h2>
              <p>{materias[index].description}</p>
              <p>Temas: {materias[index].temas}</p>
              <p>Temas Faltantes: {materias[index].faltantes}</p>
              <p>Dificultad: {materias[index].dificultad}</p>
              <p>Dificultad final: {materias[index].final}</p>
            </>
          );
        }
      }}
      </materiasContext.Consumer>
    </div>
  );
}

export default Materia;
