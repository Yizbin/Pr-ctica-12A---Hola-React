import React from 'react';
import { Insignia } from './Insignia';

interface TarjetaPerfilProps {
  nombre: string;
  carrera: string;
  semestre: number;
}

export const TarjetaPerfil: React.FC<TarjetaPerfilProps> = ({ nombre, carrera, semestre }) => {
  // Obtener iniciales a partir del nombre
  const iniciales = nombre
    .split(' ')
    .map((palabra) => palabra[0])
    .join('')
    .toUpperCase();

  const esAvanzado = semestre >= 7;

  return (
    <article className="tarjeta">
      <div className="tarjeta__avatar">{iniciales}</div>
      <h2 className="tarjeta__nombre">{nombre}</h2>
      <p className="tarjeta__carrera">{carrera}</p>
      <Insignia texto={`${semestre}.º semestre`} tipo="info" />
      {esAvanzado && <Insignia texto="Por egresar" tipo="extra" />}
    </article>
  );
};