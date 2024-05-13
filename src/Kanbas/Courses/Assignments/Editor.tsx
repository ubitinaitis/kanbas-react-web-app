export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label> <br></br>
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option selected value="ASSIGNMENTS">
                Assignments
              </option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade As</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option selected value="Percentage">
                Percentage
              </option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option selected value="Online">
                Online
              </option>
            </select>

            <tr>
              <td align="left" valign="top">
                Online Entry Options <br></br>
                <input
                  type="checkbox"
                  name="Text Entry"
                  value="Text Entry"
                  id="wd-text-entry"
                />{" "}
                Text Entry
                <br></br>
                <input
                  type="checkbox"
                  name="Website URL"
                  value="Website URL"
                  id="wd-website-url"
                />{" "}
                Website URL
                <br></br>
                <input
                  type="checkbox"
                  name="Media Recordings"
                  value="Media Recordings"
                  id="wd-media-recordings"
                />{" "}
                Media Recordings
                <br></br>
                <input
                  type="checkbox"
                  name="Student Annotation"
                  value="Student Annotation"
                  id="wd-student-annotation"
                />{" "}
                Student Annotation
                <br></br>
                <input
                  type="checkbox"
                  name="File Uploads"
                  value="File Uploads"
                  id="wd-file-upload"
                />{" "}
                File Uploads
                <br></br>
              </td>
            </tr>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign</label>
          </td>

          <td>
            <label htmlFor="wd-assign-to">Assign to</label>

            <tr>
              <td align="left" valign="top">
                <td>
                  <input id="wd-assign-to" value={"Everyone"} />
                </td>
              </td>
            </tr>
          </td>

          <td>
            <label htmlFor="wd-due-date">Due</label>

            <tr>
              <td align="left" valign="top">
                <td>
                  <input type="date" id="wd-due-date" value="2024-05-12" />
                </td>
              </td>
            </tr>
          </td>

          <td>
            <label htmlFor="wd-available-from">Available From</label>

            <tr>
              <td align="left" valign="top">
                <td>
                  <input
                    type="date"
                    id="wd-available-from"
                    value="2024-05-12"
                  />
                </td>
              </td>
            </tr>
          </td>

          <td>
            <label htmlFor="wd-available-until">Until</label>

            <tr>
              <td align="left" valign="top">
                <td>
                  <input
                    type="date"
                    id="wd-available-until"
                    value="2024-05-12"
                  />
                </td>
              </td>
            </tr>
          </td>
        </tr>
      </table>
      <hr></hr>
      <td align="right">
        <button id="wd-button" type="button">
          Cancel
        </button> 
        <button id="wd-button" type="button">
          Save
        </button>
      </td>
    </div>
  );
}
