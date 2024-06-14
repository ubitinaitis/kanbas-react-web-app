import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import AssignmentDelete from "./AssignmentDelete";
import Editor from "./Editor";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function LessonControlButtons({
  assignmentId,
  deleteAssignment,
  editAssignment,
  assignmentTitle
}: {
  assignmentId: string;
  deleteAssignment: (assignmentId: string) => void;
  editAssignment: (assignmentId: string) => void;
  assignmentTitle: string;
}) {
  const { cid } = useParams();
  const dispatch = useDispatch();

  return (
    <div className="float-end">
      <Link
        className="wd-assignment-link"
        to={`/Kanbas/Courses/${cid}/Assignments/${assignmentId}/edit`}
        onClick={() => editAssignment(assignmentId)}
      >
        <FaPencil className="text-primary me-3" />
      </Link>

      <button
        className="btn float-end"
        data-bs-toggle="modal"
        data-bs-target="#wd-delete-assignment-dialog"
        // onClick={() => deleteAssignment(assignmentId)}
      >
        <FaTrash className="text-danger me-2 mb-1" />
      </button>

      <button
        className="btn float-end"
        onClick={() => deleteAssignment(assignmentId)}
      >
        <FaTrash className="text-blue me-2 mb-1" />
      </button>

      <GreenCheckmark />

      <AssignmentDelete
        delAssign={() => {
          console.log("Calling deleteAssignment with id:", assignmentId);
          deleteAssignment(assignmentId);
        }}
        assignmentId={assignmentId}
        assignmentTitle={assignmentTitle}
      /> 
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}

// onClick={() => deleteAssignment(assignmentId)}

{
  /* <ModuleEditor dialogTitle="Add Module" moduleName={moduleName}
setModuleName={setModuleName} addModule={addModule} />

<button className="btn btn-lg btn-danger me-1 float-end"
data-bs-toggle="modal" data-bs-target="#wd-add-module-dialog" >
<FaPlus className="position-relative me-2" style={{ bottom: "1px" }} /> */
}
