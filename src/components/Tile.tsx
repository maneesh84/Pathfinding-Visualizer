import { twMerge } from "tailwind-merge";
import {
  END_TILE_STYLE,
  MAX_ROWS,
  PATH_TILE_STYLE,
  START_TILE_STYLE,
  TILE_STYLE,
  TRAVERSED_TILE_STYLE,
  WALL_TILE_STYLE,
} from "../utils/constants";

interface MouseFunction {
  (row: number, col: number): void;
}

export function Tile({
  row,
  col,
  isStart,
  isEnd,
  isTraversed,
  isPath,
  isWall,
  handleMouseDown,
  handleMouseUp,
  handleMouseEnter,
}: {
  row: number;
  col: number;
  isStart: boolean;
  isEnd: boolean;
  isPath: boolean;
  isWall: boolean;
  isTraversed: boolean;
  handleMouseDown: MouseFunction;
  handleMouseUp: MouseFunction;
  handleMouseEnter: MouseFunction;
}) {
  let currentTileStyle;
  if (isStart) {
    currentTileStyle = START_TILE_STYLE;
  } else if (isEnd) {
    currentTileStyle = END_TILE_STYLE;
  } else if (isPath) {
    currentTileStyle = PATH_TILE_STYLE;
  } else if (isWall) {
    currentTileStyle = WALL_TILE_STYLE;
  } else if (isTraversed) {
    currentTileStyle = TRAVERSED_TILE_STYLE;
  } else {
    currentTileStyle = TILE_STYLE;
  }

  const borderStyle =
    row === MAX_ROWS - 1 ? "border-b" : col === 0 ? "border-l" : "";
  const edgeStyle = row === MAX_ROWS - 1 && col === 0 ? "border-l" : "";

  return (
    <div
      className={twMerge(currentTileStyle, borderStyle, edgeStyle)}
      id={`${row}-${col}`}
      onMouseDown={() => handleMouseDown(row, col)}
      onMouseEnter={() => handleMouseEnter(row, col)}
      onMouseUp={() => handleMouseUp(row, col)}
    ></div>
  );
}
