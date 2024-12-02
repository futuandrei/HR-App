import { useState } from "react";
import "./EmployeeCard.css";
import Button from "../Button/Button";

function EmployeeCard(props) {
  const [role, setRole] = useState(props.initialRole);
  console.log("card props", props);
  const [isPromoted, setIsPromoted] = useState(false);
  // const [buttonText, setButtonText] = useState("Promote!");
  // const [toggleFormEdit, setToggleFormEdit] = useState(false);

  const clickHandler = () => {
    if (isPromoted) {
      // Demote employee
      setRole(props.initialRole);
      // setButtonText(props.buttonText);
      // setButtonText("Demote");
      setIsPromoted(false);
    } else {
      // Promote employee
      // setRole (`${props.initialRole} / Team Lead`);
      setRole(`Team Lead`);
      // setButtonText("Promote");
      setIsPromoted(true);
    }
  };

  return (
    <>
      <div className="card">
        <h3 className="card-title">{props.name}</h3>
        <img
          src={`https://robohash.org/${props.id}.png?set=set5&size=200x200`}
          alt={`${props.name}'s avatar`}
          className="thumbnail"
        />
        <ul className="card-content">
          <li>{props.department} department</li>
          <li>{props.salary} €</li>
          <li>{role}</li>
          <li>{props.startDate}</li>
          <li>{props.location}</li>
        </ul>
        <Button
          text={isPromoted ? "Demote" : "Promote"}
          click={clickHandler} // onClick can be anything.
          variant={isPromoted ? "secondary" : "primary"}
        />
      </div>
    </>
  );
}

export default EmployeeCard;
