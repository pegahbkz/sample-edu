import { Routes, Route, Link, useNavigate } from "react-router-dom";

import Login from './pages/Login';
import Terms from "./pages/Terms";
import TermEdit from "./pages/TermEdit";
import UserModify from "./pages/admin/UserModify";
import DepartmentEdit from "./pages/DepartmentEdit";
import CourseEdit from "./pages/CourseEdit"
import TermInfo from "./pages/TermInfo";
import CourseUsers from "./pages/CourseUsers";

function App() {
  return (
    <div className="w-full">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/terms/info/:TermName" element={<TermInfo />} />
        <Route path="/terms/edit/:TermName" element={<TermEdit />} />
        <Route path="/terms/info/:TermName/:courseName" element={<CourseUsers />} />
        <Route path="/admin/user" element={<UserModify />} />
        <Route path="/admin2" element={<DepartmentEdit />} />
        <Route path="/admin3" element={<CourseEdit />} />
      </Routes>
    </div>
  );
}

export default App;
