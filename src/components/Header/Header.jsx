import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import Button from "../Button/Button";
import "./Header.css";

const Header = () => {
  //   const buttonText = props.loginStatus ? "Log out" : "Log in";

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="header">
      <div className="headerMenu">
        <NavLink to="/">
          <img src={logo} alt="Company Logo" className="logo" />
        </NavLink>
        <div className="nav-links">
          <ul className="nav">
            <li>
              <NavLink to="HomePage">Home</NavLink>
            </li>
            <li>
              <NavLink to="EmployeesPage">Employees</NavLink>
            </li>
          </ul>
          <Button text={"Logout"} variant="secondary" click={handleLogout} />
        </div>
      </div>
    </div>
  );
};

export default Header;
