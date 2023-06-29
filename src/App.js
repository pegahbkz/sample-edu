import { Routes, Route, Link, useNavigate } from "react-router-dom";

import Login from './pages/Login';
import Terms from "./pages/Terms";
import TermEdit from "./pages/TermEdit";

function App() {
  return (
    <div className="w-full">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/terms/:TermName" element={<TermEdit />} />
      </Routes>
    </div>
  );
}

export default App;
