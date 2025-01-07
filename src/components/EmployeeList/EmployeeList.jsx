import { useEffect, useState } from "react";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import "./EmployeeList.css";
// import employees from "../../data/employees.js"; // import json

const EmployeeList = () => {
  // const [posts, setPosts] = useState([]); // Added on Wednesday 27.11
  const [isLoading, setIsLoading] = useState(true); // Added on Wednesday 27.11
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/persons")
      .then((response) => response.json())
      .then((data) => {
        setEmployees(data);
        setIsLoading(false);
      });
  }, []);

  // Function to delete employee
  const deleteEmployee = async (id) => {
    // Send DELETE request to the server
    await fetch(`http://localhost:3001/employees/${id}`, {
      method: "DELETE",
    });

    // Update state to remove employee from list
    setEmployees((prevEmployees) =>
      prevEmployees.filter((employee) => employee.id !== id)
    );
  };

  // console.log(posts);
  return (
    <div className="cards-list">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        employees.map((employee) => (
          <EmployeeCard
            key={employee.id} // Assuming each employee has a unique "id"
            name={employee.name}
            department={employee.department}
            {...employee}
            onDelete={deleteEmployee} // Pass delete function as a prop
          />
        ))
      )}
    </div>
  );
};

export default EmployeeList;
