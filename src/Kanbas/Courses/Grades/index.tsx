// import { BsGripVertical } from "react-icons/bs";
// import AssignmentHeader from "./AssignmentHeader";
// import Controls from "./Controls";
// import LessonControlButtons from "./LessonControlButtons";
// import { MdArrowDropDown } from "react-icons/md";
// import { BsJournal } from "react-icons/bs";
import { FaCog } from "react-icons/fa";
import { CiImport } from "react-icons/ci";
import { CiExport } from "react-icons/ci";
import { CiFilter } from "react-icons/ci";

import { useParams } from "react-router";
import * as db from "../../Database";

export default function Quizzes() {
  const { cid } = useParams();
  const users = db.users;
  const assignments = db.assignments;
  const grades = db.grades;
  const enrollments = db.enrollments;

  const theUsers = users.filter(
    (user: any) =>
      user.role === "STUDENT" &&
      enrollments.find(
        (enrollment: any) =>
          enrollment.user === user._id && enrollment.course === cid
      )
  );

  console.log("the users are", theUsers);

  return (
    <div>
      <div style={{ marginLeft: "400px" }}>
        <div className="dropdown d-inline me-1 float-end">
          <button
            id="wd-publish-all-btn"
            className="btn btn-lg btn-secondary"
            style={{ marginLeft: "3px" }}
            type="button"
          >
            <FaCog />
          </button>
        </div>

        <div className="dropdown d-inline me-1 float-end">
          <button
            id="wd-view-progress"
            className="btn btn-lg btn-secondary dropdown-toggle"
            style={{ marginLeft: "3px" }}
            type="button"
          >
            <CiExport style={{}} />
            Export
          </button>
        </div>

        <div className="dropdown d-inline me-1 float-end">
          <button
            id="wd-collapse-all"
            className="btn btn-lg btn-secondary"
            type="button"
          >
            <CiImport style={{}} />
            Import
          </button>
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>

      <div style={{ display: "flex" }}>
        <div>
          <div>
            <label className="form-label">Assignment Name</label>
          </div>
          <div>
            <input
              type="text"
              className="form-control dropdown-toggle"
              placeholder="🔍 Search Students"
              aria-label="Search Students"
              style={{ width: "300px", marginRight: "625px" }}
            />
          </div>
        </div>
        <div>
          <div>
            <label className="form-label">Assignment Name</label>
          </div>
          <input
            type="text"
            className="form-control dropdown-toggle"
            placeholder="🔍 Search Assignments"
            aria-label="Search Assignments"
            style={{ width: "300px" }}
          />
        </div>
      </div>
      <br></br>
      <div className="dropdown d-inline me-1">
        <button
          id="wd-collapse-all"
          className="btn btn-lg btn-secondary"
          type="button"
        >
          <CiFilter />
          Apply Filters
        </button>
      </div>

      <div>
        <table
          className="table table-striped table-bordered"
          style={{ marginTop: "10px" }}
        >
          <thead>
            <tr>
              <td>
                <b>Student Name</b>
              </td>

              {assignments
                .filter((assignment: any) => assignment.course === cid)
                .map((assignment: any) => (
                  <td>
                    <center>
                      <div>{assignment._id}</div>
                    </center>
                  </td>
                ))}
            </tr>
          </thead>
          <tbody>
            {/* When you navigate to the Grades section for the selected course,
              use the enrollments data to display the users in that course in the first column
              of the Grades table. Use the assignments data to display a column for each of the assignments.
              Use the grades data to display the grade a student got for that assignment.
              Grades don't need to be editable and input fields are not required. */}

            {theUsers.map((user) => (
              <tr>
                <td>
                  <div style={{ color: "red" }}>
                    {user.firstName} {user.lastName}
                  </div>
                </td>

                {grades
                  .filter((grade: any) => grade.student === user._id)
                  .map((grade: any) => (
                    <td>
                      <center>
                        <div>{grade.grade}</div>
                      </center>
                    </td>
                  ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
