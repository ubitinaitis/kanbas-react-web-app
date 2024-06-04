import { BsGripVertical } from "react-icons/bs";
import AssignmentHeader from "./AssignmentHeader";
import Controls from "./Controls";
import LessonControlButtons from "./LessonControlButtons";
import { MdArrowDropDown } from "react-icons/md";
import { BsJournal } from "react-icons/bs";
import { assignments } from "../../Database";
import { useParams } from "react-router";

import {
  addAssignment,
  editAssignment,
  updateAssignment,
  deleteAssignment,
} from "./reducer";
import { useSelector, useDispatch } from "react-redux";

// Use the useParams() hook to retrieve the course's ID and then find all the assignments for that
// course from the database's assignments array. Render the assignments as links that encode the course's ID
// and the assignment's ID in the URL's path. The assignment's ID will be used by a router to render the
//  corresponding assignment in the AssignmentEditor screen.

// { "_id": "A303", "title": "Systems Engineering Exam", "course": "RS103" }

import * as db from "../../Database";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();
  const [assignmentTitle, setAssignmentTitle] = useState("");

  return (
    <div id="wd-modules" style={{ width: "50vw" }}>
      <Controls
        setAssignmentTitle={setAssignmentTitle}
        assignmentTitle={assignmentTitle}
        addAssignment={() => {
          dispatch(addAssignment({ title: assignmentTitle, course: cid }));
          setAssignmentTitle("");
        }}
      />
      <br />
      <br />
      <br />
      <br />
      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div
            className="wd-title p-3 ps-2 bg-secondary"
            style={{ display: "flex" }}
          >
            <BsGripVertical className="me-2 fs-3" />
            <MdArrowDropDown className="me-2 fs-3" />
            ASSIGNMENTS <div style={{ paddingLeft: "300px" }}> </div>
            <div
              style={{
                borderRadius: "25px",
                border: "2px solid gray",
                padding: "5px",
                fontSize: "15px",
              }}
            >
              40% of Total
            </div>
            <div style={{ paddingLeft: "60px" }}> </div>
            <AssignmentHeader />
          </div>
          {assignments
            .filter((assignment: any) => assignment.course === cid)
            .map((assignment: any) => (
              <ul className="wd-lessons list-group rounded-0">
                <li
                  className="wd-lesson list-group-item p-3 ps-1"
                  style={{ display: "flex", borderLeft: "10px solid green" }}
                >
                  <BsGripVertical className="me-2 fs-3" />
                  
                  <BsJournal className="me-2 fs-3 text-success" />
                  <div
                    className="wd-assignment-list-item"
                    style={{ width: "400px", fontSize: "15px" }}
                  >
                    <b>
                      {" "}
                      {!assignment.editing && assignment.title}
                      {assignment.editing && (
                        <input
                          className="form-control w-50 d-inline-block"
                          onChange={(e) =>
                            dispatch(
                              updateAssignment({
                                ...assignment,
                                title: e.target.value,
                              })
                            )
                          }
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              dispatch(
                                updateAssignment({
                                  ...assignment,
                                  editing: false,
                                })
                              );
                            }
                          }}
                          value={assignment.title}
                        />
                      )}
                    </b>
                    <br></br>
                    <Link
                      className="wd-assignment-link"
                      to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                      style={{
                        color: "black",
                        fontSize: "20px",
                        textDecoration: "none",
                      }}
                    >
                      View Assignment Details
                    </Link>
                    <br></br>
                    <span style={{ color: "red" }}>
                      Multiple Modules
                    </span> | <b>Not available until</b> [The data may not have dates/points/etc.-- edit the assignment details to view and find out! You can see that they save by editing them to exist/making a new module.]{" "}
                  </div>
                  <div style={{ paddingLeft: "200px" }}> </div>
                  <LessonControlButtons
                    assignmentId={assignment._id}
                    deleteAssignment={(assignmentId) => {
                      dispatch(deleteAssignment(assignmentId));
                    }}
                    editAssignment={(assignmentId) =>
                      dispatch(editAssignment(assignmentId))
                    }
                    assignmentTitle={assignment.title}
                  />
                </li>
              </ul>
            ))}
        </li>
      </ul>
      <br></br> <br></br> <br></br> <br></br>
    </div>
  );
}
