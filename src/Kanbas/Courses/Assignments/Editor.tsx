import { FaPlus } from "react-icons/fa";
import * as db from "../../Database";
import { Link, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as client from "./client";
import {
  addAssignment,
  updateAssignment,
  setAssignments,
} from "./reducer";
import { useEffect, useState } from "react";

export default function AssignmentEditor() {
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const { pathname } = useLocation();
  const { cid } = useParams();
  let aid = pathname.split("/")[5];

  const dispatch = useDispatch();

  let newAssignment = pathname.split("/").includes("add");

  console.log("is this a new assignment? ", newAssignment);

  let chosenAssignment = assignments.filter(
    (assignment: any) => assignment._id === aid
  );

  console.log("chosenAssignment: ", chosenAssignment);

  const fetchAssignments = async () => {
    const assignments = await client.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignments));
  };

  useEffect(() => {
    fetchAssignments();
  }, []);

  const createAssignment = async (assignment: any) => {
    const newwAssignment = await client.createAssignment(
      cid as string,
      assignment
    );
    dispatch(addAssignment(newwAssignment));
  };

  const [brandNewAssignment, setBrandNewAssignment] = useState({
    _id: (newAssignment ? "" : chosenAssignment[0]._id),
    title: (newAssignment ? "" : chosenAssignment[0].title),
    course: (newAssignment ? "" : chosenAssignment[0].course),
    description: (newAssignment ? "" : chosenAssignment[0].description),
    points: (newAssignment ? "" : chosenAssignment[0].points),
    dueDate: (newAssignment ? "" : chosenAssignment[0].dueDate),
    availableFrom: (newAssignment ? "" : chosenAssignment[0].availableFrom),
    availableUntil: (newAssignment ? "" : chosenAssignment[0].availableUntil)
  });

  console.log("brandNewAssignment: ", brandNewAssignment);

  const saveAssignment = async (assignment: any) => {
    console.log("THE ASSIGNMENT ID WE'RE UPDATING IS ", assignment,brandNewAssignment);
    console.log("THE ASSIGNMENT ID WE'RE UPDATING IS ", assignment.brandNewAssignment._id);
    try {
      const status = await client.updateAssignment(assignment.brandNewAssignment, assignment.brandNewAssignment._id);
      dispatch(updateAssignment(assignment.brandNewAssignment));
    } catch (error) {
      console.error('Failed to update assignment:', error);
    }
  };

  return (
    <div id="wd-assignments-editor" style={{ width: "50vw" }}>
      <div className="mb-3">
        <label className="form-label">Assignment Name</label>
        <input
          className="form-control"
          id="exampleFormControlInput1"
          placeholder={newAssignment ? "" :  brandNewAssignment.title}
          value={brandNewAssignment.title}
          onChange={(a) => setBrandNewAssignment({...brandNewAssignment, title: a.target.value})}
        />
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          placeholder={newAssignment ? "" :  brandNewAssignment.description}
          value={brandNewAssignment.description}
          onChange={(a) => setBrandNewAssignment({...brandNewAssignment, description: a.target.value})}
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
                className="form-control"
                id="exampleFormControlInput1"
                placeholder={newAssignment ? "" :  brandNewAssignment.points}
                value={brandNewAssignment.points}
                onChange={(a) => setBrandNewAssignment({...brandNewAssignment, points: a.target.value})}
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
                        placeholder={newAssignment ? "" :  brandNewAssignment.dueDate}
                        value={brandNewAssignment.dueDate}
                        onChange={(a) => setBrandNewAssignment({...brandNewAssignment, dueDate: a.target.value})}
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
                          placeholder={newAssignment ? "" :  brandNewAssignment.availableFrom}
                          value={brandNewAssignment.availableFrom}
                          onChange={(a) => setBrandNewAssignment({...brandNewAssignment, availableFrom: a.target.value})}
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
                          placeholder={newAssignment ? "" :  brandNewAssignment.availableUntil}
                          value={brandNewAssignment.availableUntil}
                          onChange={(a) => setBrandNewAssignment({...brandNewAssignment, availableUntil: a.target.value})}
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
          <Link to={`/Kanbas/Courses/${cid}/Assignments`}>Cancel</Link>
        </button>

        {newAssignment ? (
          <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
            <button
              onClick={() => {
                createAssignment(brandNewAssignment);
                setBrandNewAssignment({...brandNewAssignment, _id: "", title: "", description: "", points: "", dueDate: "", availableFrom: "", availableUntil: ""});
              }}
              type="button"
              className="btn btn-danger"
            >
              Add Assignment{" "}
            </button>
          </Link>
        ) : (
          <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
            <button
              onClick={() => {
                saveAssignment({brandNewAssignment
                });
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

