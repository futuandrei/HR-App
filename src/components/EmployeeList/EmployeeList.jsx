import EmployeeCard from '../EmployeeCard/EmployeeCard';
import './EmployeeList.css'
import './EmployeeList.css'

const EmployeeList = () => {

  return (
      <div className="cards-list">
        <EmployeeCard name="Harry Potter" department="Management" salary="7000" initialRole="CEO"/>
        <EmployeeCard name="Steve Muck" department="Magic" salary="5000" initialRole="IT specialist"/>
        <EmployeeCard name="Fanny Potter" department="IT" salary="5000" initialRole="specialist"/>
        <EmployeeCard name="Roman Mars" department="IT" salary="5000" initialRole="specialist"/>
        <EmployeeCard name="Clarion Valentine" department="Magic" salary="5000" initialRole="Sparkle Master"/>
      </div>
  );
}

export default EmployeeList
