import Dashboard from "./components/Dashboard"
import "./App.css";
import { BrowserRouter } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Dashboard />
    </BrowserRouter>
  );
}

export default App
