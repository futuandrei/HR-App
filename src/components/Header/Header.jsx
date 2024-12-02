import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import Button from "../Button/Button";
import "./Header.css";

const Header = (props) => {
  const buttonText = props.loginStatus ? "Log out" : "Log in";

  return (
    <div className="header">
      <div className="headerMenu">
        <NavLink to="/">
          <img src={logo} alt="Company Logo" className="logo" />
        </NavLink>
        <ul className="nav">
          <li>
            <NavLink to="/HomePage">Home</NavLink>
          </li>
          <li>
            <NavLink to="/EmployeePage">Employees</NavLink>
          </li>
        </ul>
        <Button onClick={props.onClick} text={buttonText} variant="primary" />
      </div>
    </div>
  );
};

export default Header;
