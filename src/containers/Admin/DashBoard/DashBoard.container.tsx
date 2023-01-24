import React from "react";
import { api } from "../../../utils/api";
import Table from "./components/table";

export const DashBoardContainer: React.FC = () => {
  const { data } = api.users.getUsers.useQuery();

  return (
    <div className="flex flex-col justify-center align-middle">
      <Table data={data} />
    </div>
  );
};
