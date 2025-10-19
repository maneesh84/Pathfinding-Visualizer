import { getUntraversedNeighbors } from "../../../utils/getUntraversedNeighbour";
import { isEqual } from "../../../utils/helper";
import { isInQueue } from "../../../utils/isInQueue";
import type { GridType, TileType } from "../../../utils/Types";

export const bfs = (grid: GridType, startTile: TileType, endTile: TileType) => {
  const traversedTiles: TileType[] = [];
  const base = grid[startTile.row][startTile.col];
  base.distance = 0;
  base.isTraversed = true;
  const unTraversed = [base];
  while (unTraversed.length) {
    const currTile = unTraversed.shift() as TileType;
    if (currTile.isWall) continue;
    if (currTile.distance === Infinity) break;

    currTile.isTraversed = true;
    traversedTiles.push(currTile);
    if (isEqual(currTile, endTile)) break;

    const neighbour = getUntraversedNeighbors(grid, currTile);

    for (let i = 0; i < neighbour.length; i++) {
      if (!isInQueue(neighbour[i], unTraversed)) {
        const nei = neighbour[i];
        nei.distance = currTile.distance + 1;
        nei.parent = currTile;
        unTraversed.push(nei);
      }
    }
  }

  const path = [];
  let tile = grid[endTile.row][endTile.col];
  while (tile !== null) {
    tile.isPath = true;
    path.unshift(tile);
    tile = tile.parent!;
  }
  return { traversedTiles, path };
};
