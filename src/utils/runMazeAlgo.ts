import type { GridType, MazeType, SpeedType, TileType } from "./Types";


export const runMazeAlgorithm=async({
  maze,
  grid,
  startTile,
  endTile,
  setIsDisabled,
  speed,
}:{
  maze:MazeType;
  grid:GridType;
  startTile:TileType;
  endTile:TileType;
  setIsDisabled:(isDisabled:boolean)=>void;
  speed:SpeedType;
})=>{
  if(maze==='binary_tree'){
    await binaryTree(grid,startTile,endTile,setIsDisabled,speed);
  }
}