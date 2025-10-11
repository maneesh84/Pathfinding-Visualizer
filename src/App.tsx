import { useRef } from "react";
import { Grid } from "./components/Grid";
import { PathfindingProvider } from "./contexts/PathfindingContext";
import { SpeedProvider } from "./contexts/SpeedContext";
import { TileProvider } from "./contexts/TileContext";
import { Nav } from "./components/Nav";

function App() {
  const isVisualizationRunningRef = useRef(false);
  return (
    <>
      <PathfindingProvider>
        <TileProvider>
          <SpeedProvider>
            <div className=" flex flex-col bg-gray-500">
              <Nav />
              <Grid isVisualizationRunningRef={isVisualizationRunningRef} />
            </div>
          </SpeedProvider>
        </TileProvider>
      </PathfindingProvider>
    </>
  );
}
export default App;
