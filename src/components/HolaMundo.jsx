//Componente tipo Stateless
import React from 'react';

const HolaMundo = () => {
    const Hello = '¡Hola Mundo!';
    return (
        <div className="HolaMundo">
            <h1>{Hello}</h1>
        </div>
    );
};

export default HolaMundo;