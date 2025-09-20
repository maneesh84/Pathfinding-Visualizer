import { useRef } from "react";
import { Grid } from "./components/Grid";
import { PathfindingProvider } from "./contexts/PathfindingContext";
import { SpeedProvider } from "./contexts/SpeedContext";
import { TileProvider } from "./contexts/TileContext";

function App() {

  const isVisualizationRunningRef=useRef(false);
  return (
    <>
      <PathfindingProvider>
        <TileProvider>
          <SpeedProvider>
            <div className="h-screen w-screen flex flex-col bg-gray-950">
              <Grid isVisualizationRunningRef={isVisualizationRunningRef}/>
            </div>
          </SpeedProvider>
        </TileProvider>
      </PathfindingProvider>
    </>
  );
}
export default App;
