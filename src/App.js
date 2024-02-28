import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import OrderPage from "./pages/Order";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<OrderPage />} /> {/* Customer Order Page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
