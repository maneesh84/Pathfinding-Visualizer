import { useContext } from "react";
import { pathFindingContext } from "../contexts/PathfindingContext";

export const usePathFinding = () => {
  const context = useContext(pathFindingContext);
  if (!context) {
    throw new Error(
      "use pathFinding must be used within the pathfindinProvider"
    );
  }
  return context;
};
