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

export function Tile({
  row,
  col,
  isStart,
  isEnd,
  isTraversed,
  isPath,
  isWall,
}: {
  row: number;
  col: number;
  isStart: boolean;
  isEnd: boolean;
  isPath: boolean;
  isWall: boolean;
  isTraversed: boolean;
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
    ></div>
  );
}
