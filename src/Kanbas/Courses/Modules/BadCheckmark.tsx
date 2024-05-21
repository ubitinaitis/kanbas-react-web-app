import { TiDeleteOutline } from "react-icons/ti";
import { FaCircle } from "react-icons/fa";
export default function BadCheckmark() {
  return (
    <span className="me-1 position-relative">
      <TiDeleteOutline style={{ top: "2px" }}
        className="me-1 position-absolute fs-5" />
      <FaCircle className="text-white me-1 fs-6" />
    </span>
  );
}
