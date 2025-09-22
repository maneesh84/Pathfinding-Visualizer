import type { ChangeEvent } from "react";
import { usePathFinding } from "../Hooks/usePathFinding";
import { MAZES } from "../utils/constants";
import { Select } from "./Select";

export function Nav() {
  const { maze } = usePathFinding();

  return (
    <div className="flex items-center justify-center min-h-[4.5rem] border-b shadow-gray-600 sm:px-5 px-0">
      <div className="flex items-center lg:justify-between justify-center w-full sm:w-[52rem]">
        <h1 className="lg:flex hidden w-[40%] text-2xl pl-1">
          Pathfinding Visualizer
        </h1>
        <div className=" ">
          <Select
            label="Maze"
            value={maze}
            option={MAZES}
            onChange={(e) => {
              //function
            }}
          />
        </div>
      </div>
    </div>
  );
}
