import React from "react";
import Avatar from "./avatar";

// interface IHeader {}
const Header: React.FC = () => {
  return (
    <header className="absolute mb-1 flex w-screen items-center justify-between bg-slate-200 py-4 px-8 shadow-xl">
      <h1 className="text-lg font-medium">Área do Aluno</h1>
      <div className="flex gap-5 ">
        <div className="hidden md:block">
          <p className="font-bold">Bem vindo!</p>
          <p>Fulano Beltrano</p>
        </div>
        <Avatar />
      </div>
    </header>
  );
};

export default Header;
