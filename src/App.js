import React from 'react';
import './App.css';
import logo from "./images/logo.png"

function App() {
  
  const [tmda,setTmda] = React.useState({ //variable [2 variables: objeto, modificador]
    mes: 'Enero',
    dia: 'Lunes',
    desde_hs: 8,
    hasta_hs: 13,
    censoAut: 251
  })
  const censoA = tmda.censoAut;
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
  const result1 = Math.round(censoA * (100 / calculateHora()) * (100 / calculateDia()) * (100 / calculateMes()));
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




  const [tmda2,setTmda2] = React.useState({ //variable [2 variables: objeto, modificador]
    mes2: 'Enero',
    dia2: 'Lunes',
    desde_hs2: 8,
    hasta_hs2: 13,
    censoCam: 120
  })
  const censoB = tmda2.censoCam;
  const porcAdia2 = [108.69, 110.55, 105.27, 114.27, 111.85, 109.86, 39.51];
  const porcAmes2 = [117.27, 129.43, 127.26, 100.47, 84.84, 82.6, 82.6, 84.84, 89.3, 96, 107.16, 98.23];
  const porcAhora2 = [ 0.33, 0, 0.46, 0, 0, 0.8, 2.05, 6.61, 10.25, 6.83, 8.43, 8.2, 6.61, 7.06, 8.2, 8.66, 8.43, 6.83, 4.1, 2.73, 1.59, 0.91, 0.46, 0.46];
  const calculateHora2 = () => {
    let sum = 0;
    for (let index = tmda2.desde_hs2; index < tmda2.hasta_hs2; index++) {
      sum += porcAhora2[index];
    }
    return sum;
  }
  const calculateDia2 = () => {
    const week2 = [ 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']
    for (let index = 0; index < 7; index++) {
      if (tmda2.dia2.toLowerCase() === week2[index]) {
        return porcAdia2[index];
      }
    }
  }
  const calculateMes2 = () => {
    const month2 = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'setiembre', 'octubre', 'noviembre', 'diciembre']
    for (let index = 0; index < 12; index++) {
      if (tmda2.mes2.toLowerCase() === month2[index]) {
        return porcAmes2[index];
      }
    }
  }
  const result2 = Math.round(censoB * (100 / calculateHora2()) * (100 / calculateDia2()) * (100 / calculateMes2()));
  const onChange2 = (event) => {
    const value2 = event.target.value;
    const name2 = event.target.name;    
    if (name2 === 'mes2' || name2 === 'dia2') {
      setTmda2({
        ...tmda2,
        [name2]: value2,
      })
      return;
    }
    setTmda2({
      ...tmda2,
      [name2]: parseFloat(value2),
    })
  }
  return (
    <React.Fragment>
      <div className="App">
        <header className="App-header">
          <h1>
            <a href="./"><b>Sly-Tools</b></a>
          </h1>

          <img className="App-header__Logo" src={logo} alt="Logo"/>
        </header>
        <main className="App-main">
            <h1>
              Tránsito Medio Diario Anual
            </h1>
            <p>
              Es el promedio anual de vehículos que pasan<br/>durante las 24 horas por un punto determinado del camino<br/>y durante los 365 días del año.
            </p>
              <section className="App-main__section">
                <h6>Automóviles</h6>
                <table className="App-main__section-table">
                  <tr>
                    <th><label>Mes del Censo</label></th>
                    <th><label>Día del Censo</label></th>
                    <th><label>Desde hs:</label></th>
                    <th><label>Hasta horas:</label></th>
                    <th><label>Censo de automóviles</label></th>
                    <th><div>TMDA</div></th>
                  </tr>
                  <tr>
                    <td><input name="mes" onChange={onChange}/></td>
                    <td><input name="dia" onChange={onChange}/></td>
                    <td><input name="desde_hs" onChange={onChange}/></td>
                    <td><input name="hasta_hs" onChange={onChange}/></td>
                    <td><input name="censoAut" onChange={onChange}/></td>
                    <td><div>{result1}</div></td>
                  </tr>
                </table>
              </section>
              <section className="App-main__section">
                <h6>Camiones y ómnibus</h6>
                <table className="App-main__section-table">
                  
                  <tr>
                    <th><label>Mes del Censo</label></th>
                    <th><label>Día del Censo</label></th>
                    <th><label>Desde hs:</label></th>
                    <th><label>Hasta horas:</label></th>
                    <th><label>Censo de automóviles</label></th>
                    <th><div>TMDA</div></th>
                  </tr>
                  <tr>
                    <td><input name="mes2" onChange={onChange2}/></td>
                    <td><input name="dia2" onChange={onChange2}/></td>
                    <td><input name="desde_hs2" onChange={onChange2}/></td>
                    <td><input name="hasta_hs2" onChange={onChange2}/></td>
                    <td><input name="censoCam" onChange={onChange2}/></td>
                    <td><div>{result2}</div></td>
                  </tr>
                </table>
              </section>
        </main>
      </div>
    </React.Fragment>
  );
}
export default App;