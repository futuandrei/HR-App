import "./Header.css";
import logo from "../../assets/logo.png";
import Button from "../Button/Button";

const Header = (props) => {
  const buttonText = props.loginStatus ? "Log out" : "Log in";

  return (
    <div className="header">
      <div className="headerMenu">
        <img src={logo} alt="Company Logo" className="logo" />
        <ul className="nav">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">People</a>
          </li>
          <li>
            <a href="#">Calendar</a>
          </li>
        </ul>
        <Button onClick={props.onClick} text={buttonText} variant="primary" />
      </div>
    </div>
  );
};

export default Header;
