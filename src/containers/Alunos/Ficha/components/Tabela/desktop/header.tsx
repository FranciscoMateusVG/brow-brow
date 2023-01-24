import React from "react";
import { GiWeightLiftingUp } from "react-icons/gi";
import { BsArrowRepeat } from "react-icons/bs";
import { HiLightningBolt } from "react-icons/hi";
import { AiOutlineClockCircle } from "react-icons/ai";

export const Header: React.FC = () => {
  return (
    <>
      <thead className=" bg-teal-prim border-y-2 border-terc text-white">
        <tr>
          <th className=" px-4 py-2">
            <div className="flex gap-5">
              <GiWeightLiftingUp className="mt-1" />
              Exercicios
            </div>
          </th>
          <th className="px-4 py-2">
            <div className="flex gap-7">
              <HiLightningBolt className="mt-1" />
              Series
            </div>
          </th>
          <th className=" px-4 py-2">
            <div className="flex gap-7">
              <BsArrowRepeat className="mt-1" />
              Repetições
            </div>
          </th>
          <th className=" px-4 py-2">
            <div className="flex gap-7">
              <AiOutlineClockCircle className="mt-1" />
              Descanso
            </div>
          </th>
        </tr>
      </thead>
    </>
  );
};
