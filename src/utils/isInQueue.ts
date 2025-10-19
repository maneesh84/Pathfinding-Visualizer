
import { isEqual } from "./helper";
import type { TileType } from "./Types";


export function isInQueue(tile: TileType, queue: TileType[]) {
  for (let i = 0; i < queue.length; i++) {
    if (isEqual(tile, queue[i])) return true;
  }
  return false;
}
