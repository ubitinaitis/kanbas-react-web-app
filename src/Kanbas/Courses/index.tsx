import CoursesNavigation from "C:/Users/bitin/2024/summer/webdev/kanbas-react-web-app/src/Kanbas/Navigation";
import Modules from "./Modules";
import Assignments from "./Assignments";
import Home from "./Home";
import { Navigate, Route, Routes } from "react-router";
import AssignmentEditor from "./Assignments/Editor";

export default function Courses() {
  return (
    <div id="wd-courses">
      <h2>Course 1234</h2>
      <hr />
      <table>
        <tr>
          <td valign="top">
            <CoursesNavigation />
          </td>
          <td valign="top">
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<h3>Assignments</h3>} />
              <Route
                path="Assignments/:id"
                element={<h3>Assignment Editor</h3>}
              />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Assignments/:id" element={<AssignmentEditor />} />
            </Routes>
          </td>
        </tr>
      </table>
    </div>
  );
}
