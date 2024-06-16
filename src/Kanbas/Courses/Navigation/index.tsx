
import { Link, useParams } from "react-router-dom";
import "./index.css";
export default function CoursesNavigation() {
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People"
  ];

  const { cid } = useParams();
  console.log(cid);

  return (
    <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          id={`wd-course-${link}-link`}
          to={`/Kanbas/Courses/${cid}/${link}`}
          className={`list-group-item text-danger border border-0`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}
