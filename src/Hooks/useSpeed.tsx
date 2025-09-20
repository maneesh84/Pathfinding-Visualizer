import { useContext } from "react";
import { SpeedContext } from "../contexts/SpeedContext";

export const useSpeed = () => {
  const context = useContext(SpeedContext);

  if (!context) {
    throw new Error("useSpeed must be used within speedProvider");
  }
  return context;
};
