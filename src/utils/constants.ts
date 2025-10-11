import { ssrExportAllKey } from "vite/module-runner";
import type {
  AlgorithmSelectType,
  MazeSelectType,
  selectSpeedType,
} from "./Types";

export const MAX_ROWS = 39;
export const MAX_COLS = 49;

export const START_TILE_CONFIGURATION = {
  row: 1,
  col: 1,
  isStart: false,
  isEnd: false,
  isWall: false,
  isPath: false,
  distance: 0,
  isTraversed: false,
  parent: null,
};
export const END_TILE_CONFIGURATION = {
  row: MAX_ROWS - 2,
  col: MAX_COLS - 2,
  isStart: false,
  isEnd: false,
  isWall: false,
  isPath: false,
  distance: 0,
  isTraversed: false,
  parent: null,
};

export const TILE_STYLE =
  "lg:w-[17px] md:w-[15px] xs:w-[8px] w-[7px] lg:h-[17px] md:h-[15px] xs:h-[8px] h-[7px] border-t border-r border-sky-200";
export const TRAVERSED_TILE_STYLE = TILE_STYLE + " bg-cyan-500";
export const START_TILE_STYLE = TILE_STYLE + " bg-green-500";
export const END_TILE_STYLE = TILE_STYLE + " bg-red-600";
export const WALL_TILE_STYLE = TILE_STYLE + " bg-gray-700";
export const PATH_TILE_STYLE = TILE_STYLE + " bg-green-600";

export const MAZES: MazeSelectType[] = [
  { name: "None", value: "none" },
  { name: "Binary Tree", value: "binary_tree" },
  { name: "Recursive Division", value: "recursive_division" },
];

export const ALGORITHMS: AlgorithmSelectType[] = [
  { name: "Dijkstra", value: "dijkstra" },
  { name: "A-Star", value: "aStar" },
  { name: "BFS", value: "bfs" },
  { name: "DFS", value: "dfs" },
];

export const SPEEDS: selectSpeedType[] = [
  { name: "slow", value: 2 },
  { name: "medium", value: 1 },
  { name: "fast", value: 0.5 },
];
