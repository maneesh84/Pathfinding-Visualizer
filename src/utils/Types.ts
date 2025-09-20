export type AlgorithmType = "dijkstra" | "bfs" | "dfs" | "aStar";

export type MazeType = "none" | "binary_tree" | "recursive_division";

export type TileType = {
  row: number;
  col: number;
  isStart: boolean;
  isEnd: boolean;
  isWall: boolean;
  isPath: boolean;
  isTraversed:boolean;
  distance: number;
  parent: TileType | null;
};

export type GridType = TileType[][];

export type SpeedType = 2 | 1 | 0.5;
