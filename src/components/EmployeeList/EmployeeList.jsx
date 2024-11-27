import EmployeeCard from "../EmployeeCard/EmployeeCard";
import "./EmployeeList.css";
import employees from "../../Data/employees.js"; // import json

const EmployeeList = () => {
  return (
    <div className="cards-list">
      {employees.map((employee) => (
        <EmployeeCard
          key={employee.id} // Assuming each employee has a unique "id"
          name={employee.name}
          {...employee}
        />
      ))}
    </div>
  );
};

export default EmployeeList;
