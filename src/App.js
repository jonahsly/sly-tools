import React from 'react';
import './App.css';

function App() {
  const [tmda,setTmda] = React.useState({
    mes: 0,
    dia: 0,
    desde_hs: 0,
    hasta_hs: 0,
    censoAut: 0,
    censoCam: 0
  })
  const censoA = 251;
  const censoB = 326;
  const tmda1 = censoA*(100/45)*(100/80)*(100/110);
  const tmda2 = censoB*(100/45)*(100/80)*(100/110);

  const result = (tmda1 + tmda2)/2;
  const onChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setTmda({
      ...tmda,
      [name]: value,
    })
  }

  console.log(tmda);

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Sly Tools
        </h1>
        <h3>
          T.M.D.A. 
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
  );
}

export default App;