import React, { useState } from "react";
import { Body } from "./body";
import { Header } from "./header";
import type { Exercicio } from "./interfaces";
import { ModalTabela } from "./modalTabela";

export const TabelaFicha: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleRowClick = () => {
    setModalIsOpen(true);
  };

  const exercicios: Exercicio[] = [
    { nome: "Supino", series: "3", repeticoes: "10", descanso: "60" },
    { nome: "Supino", series: "3", repeticoes: "10", descanso: "60" },
    { nome: "Supino", series: "3", repeticoes: "10", descanso: "60" },
    { nome: "Supino", series: "3", repeticoes: "10", descanso: "60" },
  ];

  return (
    <>
      <table className="m-auto min-w-[750px] table-auto  scale-110 overflow-hidden rounded-t-lg text-base shadow-md">
        <Header />
        <Body handleRowClick={handleRowClick} exercicios={exercicios} />
      </table>
      <ModalTabela modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
    </>
  );
};
