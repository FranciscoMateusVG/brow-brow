import type { Ficha, User } from "@prisma/client";
import React from "react";

interface Props {
  data:
    | (User & {
        Ficha: Ficha[];
      })[]
    | undefined;
}

const Table: React.FC<Props> = ({ data }) => {
  return (
    <div>
      {data && data[0] && (
        <table className="w-full table-auto rounded-lg text-left shadow-md">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 font-medium text-gray-600">Column 1</th>
              <th className="px-4 py-2 font-medium text-gray-600">Column 2</th>
              <th className="px-4 py-2 font-medium text-gray-600">Column 3</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{row.oauth_sub}</td>
                <td className="border px-4 py-2">{row.name}</td>
                <td className="border px-4 py-2">
                  {row?.Ficha[0] ? "true" : "false"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
