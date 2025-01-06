import { useState } from "react";
import "./EmployeeCard.css";
import Button from "../Button/Button";

function EmployeeCard(props) {
  const [role, setRole] = useState(props.initialRole);
  // console.log("card props", props);
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

  // Started at
  const formatStartDate = () => {
    const today = new Date();
    const startYear = new Date(props.startDate);
    const startMonth = new Date(props.startDate);
    let year = startYear.getFullYear();
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let month = monthNames[startMonth.getMonth()]; // Convert month index to month name
    // console.log(year);
    return month + "/" + year;
  };

  // Years worked
  const yearsWorked = () => {
    const today = new Date();
    const startDate = new Date(props.startDate);
    let years = today.getFullYear() - startDate.getFullYear();
    // console.log(years);
    return years;
  };

  // Check if today is the anniversary
  const isAnniversary = () => {
    const today = new Date();
    const startDate = new Date(props.startDate);
    return (
      today.getMonth() === startDate.getMonth() &&
      today.getDate() === startDate.getDate()
    );
  };

  // Check for probation period (3 months)
  const hasProbationReviewComingUp = (probationPeriodMonths = 3) => {
    const today = new Date(); // Get today's date.
    const startDate = new Date(props.startDate); // Convert start date string to Date object.

    const totalMonthsDifference =
      (today.getFullYear() - startDate.getFullYear()) * 12 +
      (today.getMonth() - startDate.getMonth());
    // console.log(totalMonthsDifference);

    // Check if the probation period is exactly this month or coming up within 1 month
    if (totalMonthsDifference === probationPeriodMonths) {
      return "Probation review this month!";
    } else if (totalMonthsDifference === probationPeriodMonths - 1) {
      return "Probation review next month!";
    } else if (totalMonthsDifference === probationPeriodMonths - 2) {
      return "Probation review in 2 months!";
    } else {
      return "";
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
          <li>Department: {props.department}</li>
          <li>Salary: {props.salary} €</li>
          <li>Role: {role}</li>
          <li>Started: {formatStartDate()}</li>
          {/* <li>{props.location}</li> */}
          <li>In company for: {yearsWorked()} yrs</li>
          <li>
            {isAnniversary() ? (
              <span style={{ color: "green", fontWeight: "bold" }}>
                🎉 Work Anniversary Today!
              </span>
            ) : (
              ""
            )}
          </li>
          <li>
            {hasProbationReviewComingUp(3) && (
              <span style={{ color: "orange", fontWeight: "bold" }}>
                💬 {hasProbationReviewComingUp(3)}
              </span>
            )}
          </li>
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
