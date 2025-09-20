import type { Key } from "react";
import { usePathFinding } from "../Hooks/usePathFinding";
import { MAX_COLS, MAX_ROWS } from "../utils/constants";
import { twMerge } from "tailwind-merge";
import { Tile } from "./Tile";

export function Grid() {
  const { grid } = usePathFinding();

  return (
    <div
      className={twMerge(
        // Base classes
        "flex items-center flex-col justify-center border-sky-300 mt-10",
        // Control Grid height
        `lg:min-h-[${MAX_ROWS * 17}px]  md:min-h-[${
          MAX_ROWS * 15
        }px] xs:min-h-[${MAX_ROWS * 8}px] min-h-[${MAX_ROWS * 7}px]`,
        // Controlling grid width
        `lg:w-[${MAX_COLS * 17}px] md:w-[${MAX_COLS * 15}px] xs:w-[${
          MAX_COLS * 8
        }px] w-[${MAX_COLS * 7}px]`
      )}
    >
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((tile, tileIndex) => {
            const { isStart, isEnd, isPath, isWall, isTraversed } = tile;
            return (
              <Tile
                key={tileIndex}
                row={tile.row}
                col={tile.col}
                isEnd={isEnd}
                isPath={isPath}
                isStart={isStart}
                isWall={isWall}
                isTraversed={isTraversed}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}
