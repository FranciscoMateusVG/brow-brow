import { type NextPage } from "next";
import React from "react";
import { FichaContainer } from "../../containers/Ficha/Ficha.container";

const Ficha: NextPage = () => {
  return (
    <div className="flex h-screen justify-center bg-slate-300 align-middle">
      <FichaContainer />
    </div>
  );
};

export default Ficha;
