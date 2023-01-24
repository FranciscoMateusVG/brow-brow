import React from "react";
import type { Exercicio } from "../interfaces";

interface IBodyProps {
  handleRowClick: () => void;
  exercicios: Exercicio[];
}

export const Body: React.FC<IBodyProps> = ({ handleRowClick, exercicios }) => {
  return (
    <>
      <tbody className="border-b-2 border-terc">
        {exercicios.map((exercicio, index) => (
          <tr
            key={index}
            onClick={() => handleRowClick()}
            className=" relative cursor-pointer text-white duration-300 odd:bg-prim  even:bg-prim-light hover:bg-prim-dark"
          >
            <td className=" px-4 py-2">{exercicio.nome}</td>
            <td className=" px-4 py-2 text-center">{exercicio.series}</td>
            <td className=" px-4 py-2 text-center">{exercicio.repeticoes}</td>
            <td className=" px-4 py-2 text-center">{exercicio.descanso}</td>
          </tr>
        ))}
      </tbody>
    </>
  );
};

{
  /* <tr
          onClick={() => handleRowClick()}
          className=" cursor-pointer duration-300 odd:bg-white even:bg-gray-100 hover:bg-gray-100 hover:text-teal-500"
        >
          <td className=" px-4 py-2">Rosca Invertida Pulley</td>
          <td className=" px-4 py-2 text-center">2</td>
          <td className=" px-4 py-2">4</td>
          <td className=" px-4 py-2">3 minutos</td>
        </tr>
        <tr
          onClick={() => handleRowClick()}
          className=" cursor-pointer duration-300 odd:bg-white even:bg-gray-100 hover:bg-gray-100 hover:text-teal-500"
        >
          <td className=" px-4 py-2">Enrolar Toquinho (Antebraço)</td>
          <td className=" px-4 py-2 text-center">3</td>
          <td className=" px-4 py-2">Enrolar e Desenrolar</td>
          <td className=" px-4 py-2">5 minutos</td>
        </tr>
        <tr
          onClick={() => handleRowClick()}
          className=" cursor-pointer duration-300 odd:bg-white even:bg-gray-100 hover:bg-gray-100 hover:text-teal-500"
        >
          <td className=" px-4 py-2">Rosca Invertida Pulley</td>
          <td className=" px-4 py-2 text-center">2</td>
          <td className=" px-4 py-2">4</td>
          <td className=" px-4 py-2">3 minutos</td>
        </tr> */
}
