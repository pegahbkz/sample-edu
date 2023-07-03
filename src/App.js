import { Routes, Route, Link, useNavigate } from "react-router-dom";

import Login from './pages/Login';
import Terms from "./pages/Terms";
import TermEdit from "./pages/TermEdit";
import DepartmentEdit from "./pages/DepartmentEdit";
import CourseEdit from "./pages/CourseEdit"
import TermInfo from "./pages/TermInfo";
import CourseUsers from "./pages/CourseUsers";
import Students from "./pages/Students"
import Professors from "./pages/Professors";
import Registers from "./pages/Registers";
import RegisterCourse from "./pages/RegisterCourse";
import PreregisterCourse from "./pages/PreregisterCourse";
import AddStudent from "./pages/admin/AddStudent";
import AddProfessor from "./pages/admin/AddProfessor";
import AddManager from "./pages/admin/AddManager";

function App() {
  return (
    <div className="w-full">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/terms/info/:TermName" element={<TermInfo />} />
        <Route path="/terms/edit/:TermName" element={<TermEdit />} />
        <Route path="/terms/info/:TermName/:courseName" element={<CourseUsers />} />
        <Route path="/terms/registers" element={<Registers />} />
        <Route path="/registers/register" element={<RegisterCourse />} />
        <Route path="/registers/preregister" element={<PreregisterCourse />} />
        <Route path="/students" element={<Students />} />
        <Route path="/professors" element={<Professors />} />
        <Route path="/admin/student" element={<AddStudent />} />
        <Route path="/admin/professor" element={<AddProfessor />} />
        <Route path="/admin/manager" element={<AddManager />} />
        <Route path="/admin/department" element={<DepartmentEdit />} />
        <Route path="/admin/course" element={<CourseEdit />} />
      </Routes>
    </div>
  );
}

export default App;
