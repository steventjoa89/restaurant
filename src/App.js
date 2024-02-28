import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import OrderPage from "./pages/OrderPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Admin Page */}
          <Route path="/order" element={<OrderPage />} />   {/* Guest Menu Order Page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
