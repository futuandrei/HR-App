// import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import EmployeeList from "../components/EmployeeList/EmployeeList";
import Button from "../components/Button/Button";

function HomePage() {
  return (
    <>
      {/* <Header /> */}
      <main>
        <div className="buttonRow">
          <Button text={"Add Employee"} variant="primary" />
        </div>
        <EmployeeList />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default HomePage;
