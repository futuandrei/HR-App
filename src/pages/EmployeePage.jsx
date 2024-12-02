// import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import EmployeeList from "../components/EmployeeList/EmployeeList";

function HomePage() {
  return (
    <>
      {/* <Header /> */}
      <main>
        <h1>Welcome to the Home Page</h1>
        <EmployeeList />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default HomePage;
