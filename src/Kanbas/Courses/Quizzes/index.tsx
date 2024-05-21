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

export default function Quizzes() {
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
              className="form-control"
              placeholder="🔍 Search Students"
              aria-label="Search Students"
              style={{ width: "300px", marginRight: "100px" }}
            />
          </div>
        </div>
        <div>
          <div>
            <label className="form-label">Assignment Name</label>
          </div>
          <input
            type="text"
            className="form-control"
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
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Assignment 1</th>
            <th>Assignment 2</th>
            <th>Assignment 3</th>
            <th>Assignment 4</th>
            <th>Assignment 5</th>
            {/* <!-- Add more th elements for each assignment --> */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ula</td>
            <td><input type="text" className="form-control"/></td>
            <td><input type="text" className="form-control"/></td>
            <td><input type="text" className="form-control"/></td>
            <td><input type="text" className="form-control"/></td>
            <td><input type="text" className="form-control"/></td>
            
            {/* <!-- Add more td elements for each assignment --> */}
          </tr>
          <tr>
            <td>Duncan</td>
            <td><input type="text" className="form-control"/></td>
            <td><input type="text" className="form-control"/></td>
            <td><input type="text" className="form-control"/></td>
            <td><input type="text" className="form-control"/></td>
            <td><input type="text" className="form-control"/></td>
          </tr>

          <tr>
            <td>Sneha</td>
            <td><input type="text" className="form-control"/></td>
            <td><input type="text" className="form-control"/></td>
            <td><input type="text" className="form-control"/></td>
            <td><input type="text" className="form-control"/></td>
            <td><input type="text" className="form-control"/></td>
          </tr>

          <tr>
            <td>Isabel</td>
            <td><input type="text" className="form-control"/></td>
            <td><input type="text" className="form-control"/></td>
            <td><input type="text" className="form-control"/></td>
            <td><input type="text" className="form-control"/></td>
            <td><input type="text" className="form-control"/></td>
          </tr>

          <tr>
            <td>Indigo</td>
            <td><input type="text" className="form-control"/></td>
            <td><input type="text" className="form-control"/></td>
            <td><input type="text" className="form-control"/></td>
            <td><input type="text" className="form-control"/></td>
            <td><input type="text" className="form-control"/></td>
          </tr>

          <tr>
            <td>Katie</td>
            <td><input type="text" className="form-control"/></td>
            <td><input type="text" className="form-control"/></td>
            <td><input type="text" className="form-control"/></td>
            <td><input type="text" className="form-control"/></td>
            <td><input type="text" className="form-control"/></td>
          </tr>

          <tr>
            <td>Phi</td>
            <td><input type="text" className="form-control"/></td>
            <td><input type="text" className="form-control"/></td>
            <td><input type="text" className="form-control"/></td>
            <td><input type="text" className="form-control"/></td>
            <td><input type="text" className="form-control"/></td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  );
}
