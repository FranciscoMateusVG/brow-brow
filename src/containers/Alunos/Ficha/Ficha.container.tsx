import React from "react";
import { api } from "../../../utils/api";
import { TabelaFicha } from "./components/Tabela/TabelaFicha.component";

export const FichaContainer: React.FC = () => {
  const { isLoading } = api.users.getUser.useQuery();

  return (
    <>
      {isLoading ? (
        <div className="flex flex-col justify-center align-middle text-white">
          <p>Carregando....</p>
        </div>
      ) : (
        <TabelaFicha />
      )}
    </>
  );
};
