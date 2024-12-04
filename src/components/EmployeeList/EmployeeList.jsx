import { useEffect, useState } from "react";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import "./EmployeeList.css";
// import employees from "../../data/employees.js"; // import json

const EmployeeList = () => {
  const [posts, setPosts] = useState([]); // Added on Wednesday 27.11
  const [isLoading, setIsLoading] = useState(true); // Added on Wednesday 27.11

  useEffect(() => {
    fetch("http://localhost:3001/persons")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      });
  }, []);

  console.log(posts);
  return (
    <div className="cards-list">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        posts.map((employee) => (
          <EmployeeCard
            key={employee.id} // Assuming each employee has a unique "id"
            name={employee.name}
            {...employee}
          />
        ))
      )}
    </div>
  );
};

export default EmployeeList;
