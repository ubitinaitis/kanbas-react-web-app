import CourseComponent from "./CourseComponent";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
      <div className="row row-cols-1 row-cols-md-5 g-4">
      
      <CourseComponent/>
      <CourseComponent/>
      <CourseComponent/>
      <CourseComponent/>
      <CourseComponent/>
      <CourseComponent/>
      <CourseComponent/>
      
      </div>
      </div>
    </div>
  );
}
