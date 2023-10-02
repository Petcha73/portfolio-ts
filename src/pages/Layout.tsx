import { Outlet, NavLink } from "react-router-dom";
import github from "../images/github.svg";
import email from "../images/email.svg";
import linkedin from "../images/linkedin.svg";

function Layout() {
  return (
    <div className="layout">
      <div className="header">
        <nav>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "inactive")}
                to="/"
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/aboutme">About Me</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
        <div className="myTitle">
          <h1 className="myName">PRASHANTH THIAGA</h1>
          <p>A React FrontEnd Developer with Fullstack experience </p>
        </div>
      </div>
      <div className="body">
        <Outlet />
      </div>
      <div className="footer">
        <img src={github} alt="Github Logo" />
        <img src={email} alt="Email Logo" />
        <img src={linkedin} alt="LinkedIn Logo" />
      </div>
    </div>
  );
}

export default Layout;
