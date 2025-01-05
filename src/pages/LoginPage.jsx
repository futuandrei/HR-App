import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import Footer from "../components/Footer/Footer";

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/app/EmployeePage");
  };

  return (
    <>
      {/* <Header /> */}
      <main>
        <h1>Welcome to HR App</h1>
        <h2>Please login</h2>
        <Button text={"Login"} variant="primary" click={handleLogin} />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default LoginPage;
