import React from 'react';

interface InsigniaProps {
  texto: string;
  tipo?: 'info' | 'exito' | 'extra';
}

export const Insignia: React.FC<InsigniaProps> = ({ texto, tipo = 'info' }) => {
  return (
    <span className={`insignia insignia--${tipo}`}>
      {texto}
    </span>
  );
};