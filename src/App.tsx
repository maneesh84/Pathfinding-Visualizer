import { Grid } from "./components/Grid";
import { PathfindingProvider } from "./contexts/PathfindingContext";
import { SpeedProvider } from "./contexts/SpeedContext";
import { TileProvider } from "./contexts/TileContext";

function App() {
  return (
    <>
      <PathfindingProvider>
        <TileProvider>
          <SpeedProvider>
            <div className="h-screen w-screen flex flex-col bg-gray-950">
              <Grid />
            </div>
          </SpeedProvider>
        </TileProvider>
      </PathfindingProvider>
    </>
  );
}
export default App;
