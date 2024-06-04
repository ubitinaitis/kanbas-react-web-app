import { FaPlus } from "react-icons/fa6";
import AssignmentEditor from "./AssignmentEditor";
import { Link, useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Controls({
  assignmentTitle,
  setAssignmentTitle,
  addAssignment,
}: {
  assignmentTitle: string;
  setAssignmentTitle: (title: string) => void;
  addAssignment: () => void;
}) {

  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const assignment = assignments.find((assignment: { title: string; }) => assignment.title === assignmentTitle);

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="🔍 Search..."
        aria-label="Search..."
        style={{ width: "40px" }}
      />

      <div className="dropdown d-inline me-1 float-end">
        <button
          id="wd-collapse-all"
          className="btn btn-lg btn-secondary"
          style={{ marginLeft: "10px" }}
        >
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Group
        </button>
      </div>

      <Link
        className="wd-assignment-link"
        to={`/Kanbas/Courses/${cid}/Assignments/add`}
        style={{
          color: "black",
          fontSize: "20px",
          textDecoration: "none",
        }}
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </Link>

      {/* <AssignmentEditor dialogTitle="Add Assignment" assignmentTitle={assignmentTitle} */}
      {/* setAssignmentTitle={setAssignmentTitle} addAssignment={addAssignment} /> */}
    </div>
  );
}
