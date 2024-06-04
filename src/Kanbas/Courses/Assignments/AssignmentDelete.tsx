export default function AssignmentDelete({delAssign, assignmentId, assignmentTitle}:
{ delAssign: () => void; assignmentId: string, assignmentTitle: string;}) {
  return (
    <div id="wd-delete-assignment-dialog" className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Hey! </h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div className="modal-body">
            Are you sure you want to delete assignment <strong>{assignmentTitle}</strong>? Also, hello! You might be wondering why there is a red trash can and a black one.
            My delete feature is the only thing not fitting the guidelines.
            I've been doing web dev personally for a while, and this is still stumping me! From my LessonControlButtons (the garbage can, pencil, etc. buttons,) I have it so that when the garbage
             can is pressed, it triggers the appearance of a modal, which is a component I made called AssignmentDelete (hi, you're here! :D) But as soon as the props (both the assignment ID and title)
              are passed to here, they both change to be the attributes of the FIRST assignment in the list. (see how the title is incorrect?) You'll notice that when you hit "Yup!", it ALWAYS deletes the first one in the list. I have no idea why
               the prop changes upon being passed. But if I put this same deleteAssignment function call *not* in a seperate modal component, and instead a plain ol button (the black trash can), it works! But then there's no modal. So I did both, seperately.
           </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              Actually, nevermind </button>
            <button onClick={delAssign} type="button" data-bs-dismiss="modal" className="btn btn-danger">
              Yup! </button>
          </div>
        </div>
      </div>
    </div>
  );
}

