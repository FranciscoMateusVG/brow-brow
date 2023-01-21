import React, { useState } from "react";
import { TabelaDesktop } from "./desktop/tabelaDesktop";
import type { Exercicio } from "./interfaces";
import { TabelaMobile } from "./mobile/tabelaMobile";
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
      <TabelaDesktop handleRowClick={handleRowClick} exercicios={exercicios} />
      <TabelaMobile />
      <ModalTabela modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
    </>
  );
};
