import { useLocation, useParams } from "react-router-dom";
import styles from "./EmployeePage.module.css";

const EmployeePage = () => {
  const { id } = useParams(); // Get the ID from the URL
  const location = useLocation(); // Get the passed state (props)
  const employee = location.state; // Get employee data from the passed state

  const employeeData = location.state;

  if (!employeeData) {
    return (
      <p>Error: No data found. Please return to the list and try again.</p>
    );
  }

  // Generate class name based on department
  const departmentClass =
    styles[
      `employee-page-${
        employee.department.toLowerCase().replace(/\s+/g, "-") || "default"
      }`
    ];

  return (
    <div className={`${styles["employee-page"]} ${departmentClass}`}>
      <div className={styles["employee-header"]}>
        <img
          src={employee.thumbnailUrl}
          alt={`${employee.name}'s avatar`}
          className={styles["employee-thumbnail"]}
        />
        <h1 className={styles["employee-name"]}>{employee.name}</h1>
      </div>
      <div className={styles["employee-details"]}>
        <p>Department: {employee.department}</p>
        <p>Role: {employee.initialRole}</p>
        <p>Salary: {employee.salary} €</p>
        <p>Location: {employee.location}</p>
        <p>Start Date: {employee.startDate}</p>
      </div>
    </div>
  );
};

export default EmployeePage;
