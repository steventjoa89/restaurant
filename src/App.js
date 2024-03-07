import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import OrderPage from "./pages/Order";
import { QueryClient, QueryClientProvider } from "react-query";
import KitchenPage from "./pages/Kitchen";
import ProtectedRoute from "./utils/ProtectedRoute";
import LoginPage from "./pages/Login";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<OrderPage />} exact />
            <Route path="/login" element={<LoginPage />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/kitchen" element={<KitchenPage />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </QueryClientProvider>
  );
}

export default App;
