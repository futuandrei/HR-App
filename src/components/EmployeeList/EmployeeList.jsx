import EmployeeCard from '../EmployeeCard/EmployeeCard';
import './EmployeeList.css'
import employees from './employees.json' // import json

const EmployeeList = () => {
  return (
    <div className="cards-list">
      {employees.map((employee) => (
        <EmployeeCard
          key={employee.id} // Assuming each employee has a unique "id"
          name={employee.name}
          department={employee.department}
          salary={employee.salary}
          initialRole={employee.initialRole}
          startDate={employee.startDate}
          location={employee.location}
        />
      ))}
    </div>
  );
}

// const EmployeeList = () => {
//   return (
//       <div className="cards-list">
//         {employees.map((employee,index) => (
//           console.log(employee)
//         )

//         )}
//       </div>
//   );
// }

// const EmployeeList = () => {
//   return (
//       <div className="cards-list">
//         <EmployeeCard name="Harry Potter" department="Management" salary="7000" initialRole="CEO"/>
//         <EmployeeCard name="Steve Muck" department="Magic" salary="5000" initialRole="IT specialist"/>
//         <EmployeeCard name="Fanny Potter" department="IT" salary="5000" initialRole="specialist"/>
//         <EmployeeCard name="Roman Mars" department="IT" salary="5000" initialRole="specialist"/>
//         <EmployeeCard name="Clarion Valentine" department="Magic" salary="5000" initialRole="Sparkle Master"/>
//       </div>
//   );
// }

export default EmployeeList
