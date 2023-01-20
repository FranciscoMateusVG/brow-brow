import React from "react";

export const Header: React.FC = () => {
  return (
    <>
      <thead className=" bg-teal-500 text-white">
        <tr>
          <th className="px-4 py-2">Exercicios</th>
          <th className="px-4 py-2">Series</th>
          <th className="px-4 py-2">Repetições</th>
          <th className="px-4 py-2">Descanso</th>
        </tr>
      </thead>
    </>
  );
};
