import Cursor from "./Components/Cursor";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes/AppRoutes.jsx";

function App() {  
  return (
    <div className="App">
    <Router basename="/portfolio">
      <AppRoutes />
    </Router>
    <Cursor />
    </div>
  );
}

export default App;
