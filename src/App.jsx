import './App.css'
import EmployeeList from './components/EmployeeList/EmployeeList';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <Header />
      <main>
        <h1>Welcome to the awesome HR App!</h1>
        <EmployeeList />  
      </main>
      <Footer />
    </>
  );
}

export default App
