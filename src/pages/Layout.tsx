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
        <img
          src={github}
          onClick={(e) => window.open("https://github.com/Petcha73/", "_blank")}
          alt="Github Logo"
        />
        <img
          src={email}
          onClick={(e) =>
            (window.location.href = "mailto:thiaga.prashanth@gmail.com")
          }
          alt="Email Logo"
        />
        <img
          src={linkedin}
          onClick={(e) =>
            window.open(
              "https://www.linkedin.com/in/prashanth-thiaga-453178293/",
              "_blank"
            )
          }
          alt="LinkedIn Logo"
        />
      </div>
    </div>
  );
}

export default Layout;
