import React from 'react';

interface SaludoProps {
  nombre: string;
}

export const Saludo: React.FC<SaludoProps> = ({ nombre }) => {
  return (
    <header className="saludo">
      <h1>Hola, {nombre}</h1>
      <p>Mi primera aplicación en React.</p>
    </header>
  );
};