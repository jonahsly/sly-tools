import React from 'react';
import './App.css';

function App() {
  
  const [tmda,setTmda] = React.useState({ //variable [2 variables: objeto, modificador]
    mes: 'Enero',
    dia: 'Lunes',
    desde_hs: 8,
    hasta_hs: 13,
    censoAut: 251,
    censoCam: 0
  })

  const censoA = tmda.censoAut;
  // const censoB = tmda.censoCam; Censo para camiones
  const porcAdia = [84.01, 81.19, 85.35, 83.12, 83.98, 123, 91];
  const porcAmes = [111.33, 112.36, 105.85, 99, 95.57, 92.49, 90.1, 98.04, 88.73, 94.89, 104.79, 106.85];
  const porcAhora = [0.58, 0.19, 0.44, 0, 0.14, 0.51, 2.33, 5.31, 5.9, 4.88, 5.46, 4.44, 4.22, 6.19, 6.91, 8.15, 7.79, 9.97, 7.21, 6.91, 5.02, 3.78, 2.33, 1.24];

  const calculateHora = () => {
    let sum = 0;
    for (let index = tmda.desde_hs; index < tmda.hasta_hs; index++) {
      sum += porcAhora[index];
    }
    return sum;
  }
  const calculateDia = () => {
    const week = [ 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']
    for (let index = 0; index < 7; index++) {
      if (tmda.dia.toLowerCase() === week[index]) {
        return porcAdia[index];
      }
    }
  }
  const calculateMes = () => {
    const month = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'setiembre', 'octubre', 'noviembre', 'diciembre']
    for (let index = 0; index < 12; index++) {
      if (tmda.mes.toLowerCase() === month[index]) {
        return porcAmes[index];
      }
    }
  }

  const result = Math.round(censoA * (100 / calculateHora()) * (100 / calculateDia()) * (100 / calculateMes()));
  
  const onChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;    
    if (name === 'mes' || name === 'dia') {
      setTmda({
        ...tmda,
        [name]: value,
      })
      return;
    }
    setTmda({
      ...tmda,
      [name]: parseFloat(value),
    })
  }
  


  console.log(tmda);

  return (
    <React.Fragment>
      <div className="App">
        <header className="App-header">
          <h1>
            <a href="./">Sly Tools</a>
          </h1>
          <h3>
            Tránsito Medio Diario Anual 
          </h3>
          <label>
            Mes del Censo
          </label>
          <input 
            name="mes"
            onChange={onChange}
          />
          <label>
            Día del Censo
          </label>
          <input 
            name="dia"
            onChange={onChange}
          />
          <label>
            Desde hs:
          </label>
          <input 
            name="desde_hs"
            onChange={onChange}
          />
          <label>
            Hasta horas:
          </label>
          <input 
            name="hasta_hs"
            onChange={onChange}
          />
          <label>
            Censo de automóviles
          </label>
          <input 
            name="censoAut"
            onChange={onChange}
          />
          <label>
            Censo de Camiones y ómnibus
          </label>
          <input 
            name="censoCam"
            onChange={onChange}
          />
          <div>
            {
              result
            }
          </div>
        </header>
      </div>
    </React.Fragment>
  );
}
export default App;