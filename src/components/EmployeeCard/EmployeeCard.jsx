import { useState } from "react";
import "./EmployeeCard.css";
import Button from "../Button/Button";
import Form from "../Forms/Forms";
import { useNavigate } from "react-router-dom";
import EmployeePage from "../../pages/EmployeePage";

function EmployeeCard(props) {
  const [role, setRole] = useState(props.initialRole);
  // console.log("card props", props);
  const [isPromoted, setIsPromoted] = useState(false);
  // const [buttonText, setButtonText] = useState("Promote!");
  // const [toggleFormEdit, setToggleFormEdit] = useState(false);
  const [isEditing, setIsEditing] = useState(false); // To toggle the form
  const navigate = useNavigate();

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleViewEmployee = () => {
    const employeeData = {
      id: props.id,
      name: props.name,
      department: props.department,
      salary: props.salary,
      initialRole: props.initialRole,
      location: props.location,
      startDate: props.startDate,
      thumbnailUrl: `https://robohash.org/${props.id}.png?set=set5&size=200x200`,
    };

    navigate(`/app/EmployeePage/${props.id}`, { state: employeeData }); // Navigate to EmployeePage with the ID in the URL
  };

  // const handleSave = (updatedData) => {
  //   console.log("Updated Data:", updatedData);
  //   setIsEditing(false); // Close form after saving
  //   // Here, you would typically make a PUT request to the backend with updated data
  // };
  const handleSave = (updatedData) => {
    console.log("Saving data:", updatedData); // Debug log
    setRole(updatedData.role); // Explicitly update the role state
    props.onSave(props.id, updatedData); // Call the parent's update function
    setIsEditing(false); // Close the form after saving
  };

  const handleCancel = () => {
    setIsEditing(false); // Close form on cancel
  };

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
    } else {
      return "";
    }
  };

  // Delete employee
  const handleDelete = () => {
    props.onDelete(props.id); // Call the delete function passed from the parent with the employee ID.
  };

  // Dynamically generate class name based on department
  const departmentClass = `card card-${
    props.department?.trim().toLowerCase().replace(/\s+/g, "-") || "default"
  }`;

  // console.log(`Department: "${props.department}"`); // Log the exact department value

  return (
    <>
      <div className={departmentClass}>
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
        {!isEditing ? (
          <div className="cardButtonRow">
            <Button text="View" click={handleViewEmployee} variant="primary" />
            <Button text="Edit" click={handleEditClick} variant="primary" />
            <Button
              text={isPromoted ? "Demote" : "Promote"}
              click={clickHandler} // onClick can be anything.
              variant={isPromoted ? "secondary" : "primary"}
            />
            <Button
              text={"Delete"}
              click={handleDelete} // Call the delete handler when clicked
              variant="secondary"
            />
          </div>
        ) : (
          <div className="editFormContainer">
            <Form
              role={props.initialRole}
              department={props.department}
              location={props.location}
              onSave={handleSave}
              onCancel={handleCancel}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default EmployeeCard;
