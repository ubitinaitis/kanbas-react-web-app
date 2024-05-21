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
        <table className="table table-striped table-bordered" style={{marginTop: "10px"}}>
          <thead>
            <tr>
              <td>
                <b>Student Name</b>
              </td>
              <td>
                <center>
                  <div>A1 SETUP</div> <div>out of 100</div>
                </center>
              </td>
              <td>
                <center>
                  <div>A2 SETUP</div> <div>out of 100</div>
                </center>
              </td>
              <td>
                <center>
                  <div>A3 SETUP</div> <div>out of 100</div>
                </center>
              </td>
              <td>
                <center>
                  <div>A4 SETUP</div> <div>out of 100</div>
                </center>
              </td>
              <td>
                <center>
                  <div>A5 SETUP</div> <div>out of 100</div>
                </center>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><div style={{color: "red"}}>Ula</div></td>
              <td>
                <input type="text" className="form-control" />
              </td>
              <td>
                <input type="text" className="form-control" />
              </td>
              <td>
                <input type="text" className="form-control" />
              </td>
              <td>
                <input type="text" className="form-control" />
              </td>
              <td>
                <input type="text" className="form-control" />
              </td>
            </tr>
            <tr>
              <td><div style={{color: "red"}}>Duncan</div></td>
              <td>
                <input type="text" className="form-control" />
              </td>
              <td>
                <input type="text" className="form-control" />
              </td>
              <td>
                <input type="text" className="form-control" />
              </td>
              <td>
                <input type="text" className="form-control" />
              </td>
              <td>
                <input type="text" className="form-control" />
              </td>
            </tr>

            <tr>
              <td><div style={{color: "red"}}>Sneha</div></td>
              <td>
                <input type="text" className="form-control" />
              </td>
              <td>
                <input type="text" className="form-control" />
              </td>
              <td>
                <input type="text" className="form-control" />
              </td>
              <td>
                <input type="text" className="form-control" />
              </td>
              <td>
                <input type="text" className="form-control" />
              </td>
            </tr>

            <tr>
              <td><div style={{color: "red"}}>Isabel</div></td>
              <td>
                <input type="text" className="form-control" />
              </td>
              <td>
                <input type="text" className="form-control" />
              </td>
              <td>
                <input type="text" className="form-control" />
              </td>
              <td>
                <input type="text" className="form-control" />
              </td>
              <td>
                <input type="text" className="form-control" />
              </td>
            </tr>

            <tr>
              <td><div style={{color: "red"}}>Indigo</div></td>
              <td>
                <input type="text" className="form-control" />
              </td>
              <td>
                <input type="text" className="form-control" />
              </td>
              <td>
                <input type="text" className="form-control" />
              </td>
              <td>
                <input type="text" className="form-control" />
              </td>
              <td>
                <input type="text" className="form-control" />
              </td>
            </tr>

            <tr>
              <td><div style={{color: "red"}}>Katie</div></td>
              <td>
                <input type="text" className="form-control" />
              </td>
              <td>
                <input type="text" className="form-control" />
              </td>
              <td>
                <input type="text" className="form-control" />
              </td>
              <td>
                <input type="text" className="form-control" />
              </td>
              <td>
                <input type="text" className="form-control" />
              </td>
            </tr>

            <tr>
              <td><div style={{color: "red"}}>Phi</div></td>
              <td>
                <input type="text" className="form-control" />
              </td>
              <td>
                <input type="text" className="form-control" />
              </td>
              <td>
                <input type="text" className="form-control" />
              </td>
              <td>
                <input type="text" className="form-control" />
              </td>
              <td>
                <input type="text" className="form-control" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
