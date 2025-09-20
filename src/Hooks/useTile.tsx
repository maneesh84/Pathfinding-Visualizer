import { useContext } from "react"
import { TileContext } from "../contexts/TileContext"



export const useTile=()=>{
  const context=useContext(TileContext);

  if(!context){
    throw new Error("usetile must be used within a tile provider")
  }

  return context;
}