import { useNavigate } from "react-router-dom";
// import { useState } from "react";
import NewHireForm from "../components/Forms/NewHireForm";

const AddEmployeePage = () => {
  const navigate = useNavigate(); // For navigating back

  const handleSubmit = async (newEmployee) => {
    await fetch("https://mock-api-hgn0.onrender.com/api/employees", {
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
