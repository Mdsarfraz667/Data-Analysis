import "@mantine/core/styles.css";
import "./App.css";
import { Container, MantineProvider } from "@mantine/core";
import CropTables from "./components/CropTable";
function App() {
  return (
    <MantineProvider>
      <Container>
        <CropTables />
      </Container>
    </MantineProvider>
  );
}

export default App;
