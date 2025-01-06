// import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import EmployeeList from "../components/EmployeeList/EmployeeList";
import Button from "../components/Button/Button";
import { useNavigate } from "react-router-dom";

function EmployeePage() {
  const navigate = useNavigate();

  const handleAddEmployee = () => {
    navigate("/app/AddEmployee"); // Navigate to the Add Employee form
  };

  return (
    <>
      {/* <Header /> */}
      <main>
        <div className="buttonRow">
          <Button
            text={"Add Employee"}
            variant="primary"
            click={handleAddEmployee}
          />
        </div>
        <EmployeeList />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default EmployeePage;
