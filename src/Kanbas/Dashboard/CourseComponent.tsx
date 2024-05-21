export default function Dashboard() {
  return (
    <div className="wd-dashboard-course col" style={{ width: "270px" }}>
    <div className="card">
      <img src="/reactjs.png"/>
      <div className="card-body">
        <a className="wd-dashboard-course-link"
           href="#/Kanbas/Courses/1234/Home"
           style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
             CS1234 React JS
        </a>
        <p className="wd-dashboard-course-title card-text">
          Full Stack software developer
        </p>
        <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
      </div>
    </div>
  </div>
  );
}
