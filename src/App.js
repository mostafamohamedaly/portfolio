import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes/AppRoutes.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
