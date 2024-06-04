import { FaPlus } from "react-icons/fa";
import * as db from "../../Database";
import { Link, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  addAssignment,
  editAssignment,
  updateAssignment,
  deleteAssignment,
} from "./reducer";
import { useState } from "react";

export default function AssignmentEditor() {
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const { pathname } = useLocation();
  const { cid } = useParams();
  const dispatch = useDispatch();
  let aid = pathname.split("/")[5];
  let newAssignment = pathname.split("/").includes("add");
  console.log("is this a new assignment? ", newAssignment);
  let chosenAssignment = assignments.filter((assignment: any) => assignment._id === aid);
  console.log("chosenAssignment: ", chosenAssignment);
  
  const [assignmentTitle, setAssignmentTitle] = useState(newAssignment ? '' : chosenAssignment[0].title);
  const [assignmentDescription, setAssignmentDescription] = useState(newAssignment ? '' : chosenAssignment[0].description);
  const [assignmentPoints, setAssignmentPoints] = useState(newAssignment ? '' : chosenAssignment[0].points);
  const [assignmentDueDate, setAssignmentDueDate] = useState(newAssignment ? '' : chosenAssignment[0].dueDate);
  const [assignmentAvailableFrom, setAssignmentAvailableFrom] = useState(newAssignment ? '' : chosenAssignment[0].availableFrom);
  const [assignmentAvailableUntil, setAssignmentAvailableUntil] = useState(newAssignment ? '' : chosenAssignment[0].availableUntil);

  return (
    <div id="wd-assignments-editor" style={{ width: "50vw" }}>
      <div className="mb-3">
        <label className="form-label">Assignment Name</label>
        <input
          className="form-control"
          id="exampleFormControlInput1"
          placeholder={newAssignment ? '' : assignmentTitle}
          value={assignmentTitle}
          onChange={(a) => setAssignmentTitle(a.target.value) }
        />
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          placeholder={newAssignment ? '' : assignmentDescription}
          value={assignmentDescription}
          onChange={(a) => setAssignmentDescription(a.target.value) }
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
                placeholder={newAssignment ? 0 : assignmentPoints}
                value={assignmentPoints}
                onChange={(a) => setAssignmentPoints(a.target.value) }
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
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder={newAssignment ? '' : assignmentDueDate}
                        value={assignmentDueDate}
                        onChange={(a) => setAssignmentDueDate(a.target.value) }
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
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder={newAssignment ? '' : assignmentAvailableFrom}
                          value={assignmentAvailableFrom}
                          onChange={(a) => setAssignmentAvailableFrom(a.target.value) }
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
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder={newAssignment ? '' : assignmentAvailableUntil}
                          value={assignmentAvailableUntil}
                          onChange={(a) => setAssignmentAvailableUntil(a.target.value) }
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

        {newAssignment ? (
          <Link to ={`/Kanbas/Courses/${cid}/Assignments`}>
          <button
            onClick={() => {
              dispatch(addAssignment({ title: assignmentTitle, course: cid, description: assignmentDescription, points: assignmentPoints, dueDate: assignmentDueDate, availableFrom: assignmentAvailableFrom, availableUntil: assignmentAvailableUntil}));
              setAssignmentTitle("");
            }}
            type="button"
            className="btn btn-danger"
          >
            Add Assignment{" "}
          </button>
          </Link>
        ) : (
          <Link to ={`/Kanbas/Courses/${cid}/Assignments`}>
          <button
            onClick={() => {
              dispatch(updateAssignment({_id: aid, title: assignmentTitle, course: cid, description: assignmentDescription, points: assignmentPoints, dueDate: assignmentDueDate, availableFrom: assignmentAvailableFrom, availableUntil: assignmentAvailableUntil}));
              setAssignmentTitle("");
            }}
            type="button"
            className="btn btn-danger"
          >
            Edit Assignment{" "}
          </button>
          </Link>
        )}

      </div>
    </div>
  );
}