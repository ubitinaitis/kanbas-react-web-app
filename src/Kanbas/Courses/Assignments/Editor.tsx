import { FaPlus } from "react-icons/fa";
import * as db from "../../Database";
import { Link, useLocation, useParams } from "react-router-dom";

export default function AssignmentEditor() {
  const assignments = db.assignments;
  const { pathname } = useLocation();
  let aid = pathname.split("/")[5];
  const { cid } = useParams();
  let chosenAssignment = assignments.filter((assignment: any) => assignment._id === aid);

  console.log(chosenAssignment);

  return (
    <div id="wd-assignments-editor" style={{ width: "50vw" }}>
      <div className="mb-3">
        <label className="form-label">Assignment Name</label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder={aid}
        />
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          placeholder={chosenAssignment[0].title}
        ></textarea>
      </div>
      <br />
      <div className="float-end">
        <table>
          <tbody>
            <div
              className="mb-3"
              style={{ marginRight: "-460px", display: "flex" }}
            >
              <label className="form-label" style={{ marginRight: "10px" }}>
                Points
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="100"
              />
            </div>
            <tr>
              <td align="right" valign="top">
                <label className="form-label" style={{ marginRight: "10px" }}>
                  Assignment Group
                </label>
              </td>
              <select
                className="form-select form-select-sm"
                aria-label=".form-select-sm example"
              >
                <option selected>ASSIGNMENTS</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </tr>

            <tr>
              <td align="right" valign="top">
                <label className="form-label" style={{ marginRight: "10px" }}>
                  Display Grade As
                </label>
              </td>
              <select
                className="form-select form-select-sm"
                aria-label=".form-select-sm example"
              >
                <option selected>Percentage</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </tr>
            <tr>
              <td align="right" valign="top">
                <label className="form-label" style={{ marginRight: "10px" }}>
                  Submission Type
                </label>
              </td>
              <td>
                <div
                  style={{
                    border: "1px solid lightgray",
                    borderRadius: "5px",
                    padding: "10px",
                  }}
                >
                  <tr>
                    <select
                      className="form-select form-select-sm"
                      aria-label=".form-select-sm example"
                      style={{ width: "175px" }}
                    >
                      <option selected>Online</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </tr>
                  <div>
                    <label
                      className="form-label"
                      style={{ marginRight: "10px", fontWeight: "bold" }}
                    >
                      Online Entry Options
                    </label>
                    <br />
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label className="form-check-label">Text Entry</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label className="form-check-label">Website URL</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label className="form-check-label">
                        Media Recordings
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label className="form-check-label">File Uploads</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label className="form-check-label">Google Drive</label>
                    </div>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td align="right" valign="top">
                <label className="form-label" style={{ marginRight: "10px" }}>
                  Assign
                </label>
              </td>
              <td>
                <div
                  style={{
                    border: "1px solid lightgray",
                    borderRadius: "5px",
                    padding: "10px",
                  }}
                >
                  <label className="form-label" style={{ marginRight: "10px" }}>
                    <b>Assign To</b>
                  </label>
                  <div className="mb-3" style={{ display: "flex" }}>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Everyone"
                    />
                  </div>
                  <div>
                    <label
                      className="form-label"
                      style={{ marginRight: "10px", fontWeight: "bold" }}
                    >
                      Due
                    </label>
                    <div className="mb-3" style={{ display: "flex" }}>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="May 13, 2024, 11:59 PM"
                      />
                    </div>
                  </div>
                  <div style={{ display: "flex" }}>
                    <div>
                      <label
                        className="form-label"
                        style={{ marginRight: "10px", fontWeight: "bold" }}
                      >
                        Available From
                      </label>
                      <div className="mb-3" style={{ display: "flex" }}>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="May 13, 2024, 11:59 PM"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        className="form-label"
                        style={{ marginRight: "10px", fontWeight: "bold" }}
                      >
                        Until
                      </label>
                      <div className="mb-3" style={{ display: "flex" }}>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="May 13, 2024, 11:59 PM"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
      <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
      <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
      <br></br> <br></br> <br></br>
      <br></br> <br></br> <br></br>
      <hr />
      <div className="dropdown d-inline me-1 float-end">
        <button
          id="wd-collapse-all"
          className="btn btn-lg btn-secondary"
          style={{ marginLeft: "10px", marginBottom: "30px" }}
        >
          <Link
          to={`/Kanbas/Courses/${cid}/Assignments`}>Cancel</Link>
        </button>

        <button
          id="wd-add-module-btn"
          className="btn btn-lg btn-danger"
          style={{ marginLeft: "10px", marginBottom: "30px" }}
        >
          Save
        </button>
      </div>
    </div>
  );
}