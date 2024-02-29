import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import OrderPage from "./pages/Order";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<OrderPage />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
