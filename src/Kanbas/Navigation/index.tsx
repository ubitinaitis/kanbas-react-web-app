import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import "./navstyles.css";
import { useLocation } from "react-router";

export default function KanbasNavigation() {
  const { pathname } = useLocation();
  return (
    <div id="wd-kanbas-navigation" className="list-group rounded-0 h-100" style={{ width: "110px"}}>
      <a
        id="wd-neu-link"
        target="_blank"
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0"
      >
        <img src="/NEU.png" width="75px" />
      </a>

      <a
        id="wd-account-link"
        href="#/Kanbas/Account"
        className={`nav-link ${pathname.includes("Account") ? "active" : ""} text-center list-group-item`}>
        <FaRegCircleUser className={`nav-link-account ${pathname.includes("Account") ? "active" : ""} fs-1 text-center`}/>
        <br />
        Account{" "}
      </a>

      <a
        id="wd-dashboard-link"
        href="#/Kanbas/Dashboard"
        className={`nav-link ${pathname.includes("Dashboard") ? "active" : ""} text-center list-group-item`}
      >
        <AiOutlineDashboard className="fs-1 text-danger" />
        <br />
        Dashboard{" "}
      </a>

      <a
        id="wd-course-link"
        href="#/Kanbas/Courses"
        className={`nav-link ${pathname.includes("Courses") ? "active" : ""} text-center list-group-item`}
      >
        <LiaBookSolid className="fs-1 text-danger" />
        <br />
        Courses{" "}
      </a>

      <a
        id="wd-calendar-link"
        href="#/Kanbas/Calendar"
        className={`nav-link ${pathname.includes("Calendar") ? "active" : ""} text-center list-group-item`}
      >
        <FaCalendarAlt className="fs-1 text-danger" />
        <br />
        Calendar
      </a>
      <a
        id="wd-inbox-link"
        href="#/Kanbas/Inbox"
        className={`nav-link ${pathname.includes("Inbox") ? "active" : ""} text-center list-group-item`}
      >
        <FaEnvelopeOpenText className="fs-1 text-danger" />
        <br />
        Inbox
      </a>
      <a
        id="wd-labs-link"
        href="#/Labs"
        className="list-group-item text-center border-0
                   bg-black text-white"
      >
        Back to Labs! :)
      </a>
    </div>
  );
}
