import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes/AppRoutes.jsx";
import { ThemeProvider } from "./Context/ThemeContext.jsx";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Router>
          <AppRoutes />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
