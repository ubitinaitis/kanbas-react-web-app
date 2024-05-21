import { BsGripVertical } from "react-icons/bs";
import AssignmentHeader from "./AssignmentHeader";
import Controls from "./Controls";
import LessonControlButtons from "./LessonControlButtons";
import { MdArrowDropDown } from "react-icons/md";
import { BsJournal } from "react-icons/bs";

export default function Assignments() {
  return (
    <div id="wd-modules" style={{ width: "50vw" }}>
      <Controls />
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
                <a
                  className="wd-assignment-link"
                  href="#/Kanbas/Courses/1234/Assignments/123"
                  style={{
                    color: "black",
                    fontSize: "20px",
                    textDecoration: "none",
                  }}
                >
                  <b>A1</b>
                </a>{" "}
                <br></br>
                <span style={{ color: "red" }}>Multiple Modules</span> |{" "}
                <b>Not available until</b> May 6 at 12:00 AM | <b>Due</b> May 13
                at 11:59 PM | 100 Points
              </div>
              <div style={{ paddingLeft: "200px" }}> </div>
              <LessonControlButtons />
            </li>
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
                <a
                  className="wd-assignment-link"
                  href="#/Kanbas/Courses/1234/Assignments/123"
                  style={{
                    color: "black",
                    fontSize: "20px",
                    textDecoration: "none",
                  }}
                >
                  <b>A2</b>
                </a>{" "}
                <br></br>
                <span style={{ color: "red" }}>Multiple Modules</span> |{" "}
                <b>Not available until</b> May 6 at 12:00 AM | <b>Due</b> May 13
                at 11:59 PM | 100 Points
              </div>
              <div style={{ paddingLeft: "200px" }}> </div>
              <LessonControlButtons />
            </li>
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
                <a
                  className="wd-assignment-link"
                  href="#/Kanbas/Courses/1234/Assignments/123"
                  style={{
                    color: "black",
                    fontSize: "20px",
                    textDecoration: "none",
                  }}
                >
                  <b>A3</b>
                </a>{" "}
                <br></br>
                <span style={{ color: "red" }}>Multiple Modules</span> |{" "}
                <b>Not available until</b> May 6 at 12:00 AM | <b>Due</b> May 13
                at 11:59 PM | 100 Points
              </div>
              <div style={{ paddingLeft: "200px" }}> </div>
              <LessonControlButtons />
            </li>
          </ul>
        </li>
      </ul>
      <br></br> <br></br> <br></br> <br></br>
    </div>
  );
}
