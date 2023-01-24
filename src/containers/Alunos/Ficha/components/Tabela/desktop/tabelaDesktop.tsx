import React from "react";
import { Body } from "./body";
import { Header } from "./header";
import type { Exercicio } from "../interfaces";

interface ITabelaDesktop {
  handleRowClick: () => void;
  exercicios: Exercicio[];
}

export const TabelaDesktop: React.FC<ITabelaDesktop> = ({
  handleRowClick,
  exercicios,
}) => {
  return (
    <>
      <table className="m-auto hidden min-w-[750px] table-auto scale-110  overflow-hidden rounded-t-lg text-base shadow-md md:block">
        <Header />
        <Body handleRowClick={handleRowClick} exercicios={exercicios} />
      </table>
    </>
  );
};
