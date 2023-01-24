import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { type NextPage } from "next";
import React from "react";
import { DashBoardContainer } from "../../containers/Admin/DashBoard/DashBoard.container";

const DashBoard: NextPage = () => {
  return (
    <div className="flex h-screen justify-center bg-prim align-middle">
      <DashBoardContainer />
    </div>
  );
};

export default DashBoard;

export const getServerSideProps = withPageAuthRequired();
