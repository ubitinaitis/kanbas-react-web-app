import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Assignments from "./Assignments";
import Home from "./Home";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa";
import Quizzes from "./Quizzes";
import { courses } from "../Database";
import Grades from "./Grades";

export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  console.log(course)
  console.log(cid)
  const { pathname } = useLocation();

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split("/")[4]}
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:id" element={<AssignmentEditor />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:id" element={<AssignmentEditor />} />
            <Route path="Assignments/add" element={<AssignmentEditor />} />
            <Route path="Assignments/:id/edit" element={<AssignmentEditor />} />
            <Route path="Quizzes" element={<Quizzes />} />
            <Route path="Quizzes/:id" element={<Quizzes />} />
            <Route path="Grades" element={<Grades />} />
            <Route path="Grades/:id" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
