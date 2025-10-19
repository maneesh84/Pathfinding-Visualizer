import { bfs } from "../lib/Algorithms/pathFinding/bfs";
import type { AlgorithmType, GridType, TileType } from "./Types"


export const runPathFindingAlgorithm=({
  algorithm,
  grid,
  startTile,
  endTile,
}:{
  algorithm:AlgorithmType,
  grid:GridType,
  startTile:TileType,
  endTile:TileType,
})=>{

  switch(algorithm){
    case "bfs":
      return bfs(grid,startTile,endTile);
    default:
      return bfs(grid,startTile,endTile);
  }
}