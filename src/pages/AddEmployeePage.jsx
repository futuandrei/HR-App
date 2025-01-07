import { useNavigate } from "react-router-dom";
import { useState } from "react";
import NewHireForm from "../components/Forms/NewHireForm";

const AddEmployeePage = () => {
  const navigate = useNavigate(); // For navigating back
  //   const [formData, setFormData] = useState({
  //     name: "",
  //     department: "",
  //     salary: "",
  //     initialRole: "",
  //     location: "",
  //     startDate: "",
  //   });

  const handleSubmit = async (newEmployee) => {
    // Send the new employee data to your API (or update db.json via JSON Server)
    await fetch("http://localhost:3001/persons", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEmployee),
    });

    // Navigate back to employees page after successful save
    navigate("/app/EmployeesPage");
  };

  return (
    <main>
      <h2>Add New Employee</h2>
      <NewHireForm onAddEmployee={handleSubmit} />
    </main>
  );
};

export default AddEmployeePage;
