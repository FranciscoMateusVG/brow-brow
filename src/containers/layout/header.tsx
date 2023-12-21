import React from "react";
import { Avatar } from "./avatar";
import { useUser } from "@auth0/nextjs-auth0/client";

// interface IHeader {}
const Header: React.FC = () => {
  //@ts-ignore
  const { user } = useUser();
  console.log(user);
  return (
    <header className="bg-prim absolute mb-1 flex w-screen items-center justify-between py-4 px-8 shadow-xl">
      <h1 className="text-sec text-lg font-medium">Área do Aluno</h1>
      <div className="flex gap-5 ">
        <div className="hidden md:block">
          <p className="text-sec font-bold">Bem vindo!</p>
          <p className="text-terc">{user && user.name}</p>
        </div>
        {/* TODO: fallback here for picture */}
        <Avatar url={user?.picture} />
      </div>
    </header>
  );
};

export default Header;
