import { Routes, Route, Link, useNavigate } from "react-router-dom";

import Login from './pages/Login';
import Terms from "./pages/Terms";
import TermEdit from "./pages/TermEdit";
import UserEdit from "./pages/UserEdit";
import DepartmentEdit from "./pages/DepartmentEdit";
import CourseEdit from "./pages/CourseEdit"

function App() {
  return (
    <div className="w-full">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/terms/:TermName" element={<TermEdit />} />
        <Route path="/admin" element={<UserEdit />} />
        <Route path="/admin2" element={<DepartmentEdit />} />
        <Route path="/admin3" element={<CourseEdit />} />
      </Routes>
    </div>
  );
}

export default App;
