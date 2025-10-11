import {  useState } from "react";
import { usePathFinding } from "../Hooks/usePathFinding";
import { ALGORITHMS, MAZES } from "../utils/constants";
import { Select } from "./Select";
import type { AlgorithmType, MazeType } from "../utils/Types";
import { ResetGrid } from "../utils/ResetGrid";
import { useTile } from "../Hooks/useTile";
import { runMazeAlgorithm } from "../utils/runMazeAlgo";
import { useSpeed } from "../Hooks/useSpeed";
import { PlayButton } from "./PlayButton";


export function Nav() {
  const {
    maze,
    setMaze,
    grid,
    setGrid,
    isGraphVisualized,
    setIsGraphVisualized,
    algorithm,
    setAlgorithm,
  } = usePathFinding();
  const { startTile, endTile } = useTile();
  const [isDisabled, setIsDisabled] = useState(false);
  const { speed } = useSpeed();

  const handleGenerateMaze = (maze: MazeType) => {
    if (maze === "none") {
      setMaze(maze);
      ResetGrid({ grid, startTile, endTile });
      return;
    }

    setMaze(maze);
    setIsDisabled(true);
    runMazeAlgorithm({
      maze,
      grid,
      startTile,
      endTile,
      setIsDisabled,
      speed,
    });

    const newGrid = grid.slice();
    setGrid(newGrid);
    setIsGraphVisualized(false);
  };

  const handlerRunVisualizer=()=>{
    if(isGraphVisualized){
      setIsGraphVisualized(false);
      ResetGrid({ grid: grid.slice(), startTile, endTile });
      return;
    }

    //run the algorithm
  }

  return (
    <div className="flex items-center justify-center min-h-[4.5rem] border-b shadow-gray-600 sm:px-5 px-0">
      <div className="flex items-center lg:justify-between justify-center w-full sm:w-[52rem]">
        <h1 className="lg:flex hidden w-[40%] text-2xl pl-1">
          Pathfinding Visualizer
        </h1>
        <div className="flex sm:items-end items-center justify-start sm:justify-between sm:flex-row flex-col sm:space-y-0 space-y-3 sm:py-0 py-4 sm:space-x-4">
          <Select
            label="Maze"
            value={maze}
            option={MAZES}
            isDisabled={isDisabled}
            onChange={(e) => {
              handleGenerateMaze(e.target.value as MazeType);
            }}
          />
          <Select
            label="Algorithms"
            value={algorithm}
            option={ALGORITHMS}
            onChange={(e) => {
              setAlgorithm(e.target.value as AlgorithmType);
            }}
          ></Select>
          <PlayButton
            isDisabled={isDisabled}
            isGraphVisualized={isGraphVisualized}
            handlerRunVisualizer={handlerRunVisualizer}
          />
        </div>
      </div>
    </div>
  );
}
