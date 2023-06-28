import { Routes, Route, Link, useNavigate } from "react-router-dom";

import Login from './pages/Login';
import Terms from "./pages/Terms";

function App() {
  return (
    <div className="w-full">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </div>
  );
}

export default App;
