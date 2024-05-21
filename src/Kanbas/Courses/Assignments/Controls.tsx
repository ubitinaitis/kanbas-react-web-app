import { FaPlus } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Controls() {
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
          style={{marginLeft: '10px'}}
        >
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Group
        </button>
      </div>

      <button
        id="wd-add-module-btn"
        className="btn btn-lg btn-danger"
        style={{marginLeft: '10px'}}
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </button>
    </div>
  );
}
