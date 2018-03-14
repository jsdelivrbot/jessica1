import React from 'react';

const arrayCaracteristicas = ['Soy soltera', 'Me gusta salir con mis amigos', 'Tengo una gatita, llamada Kithy', 'Voy hacer tía']

const Caracteristicas = () => (
  <div> 
    <br/>
    <ul className="box-number">{arrayCaracteristicas.map((elem, i) =>{
          return <li key={i}>{elem}</li>
        })}
    </ul>
  </div>
)

export default Caracteristicas