import { useState } from 'react'
import './EmployeeCard.css'

function EmployeeCard(props) {

  const [role, setRole] = useState(props.initialRole);

  const clickHandler = () => {
    console.log("I was clicked");
    if (role === "Team Lead") {
      setRole (props.initialRole); 
    } else {
      setRole ("Team Lead"); 
    }

  }

  return (
    <>
    <div className="card">
      <div className="card-title">{props.name}</div>
      <ul className="card-content">
        Department: {props.department},
        Role: {role},
        Salary: {props.salary}
      </ul>
        <button onClick={clickHandler}>Promote</button>
    </div>
    </>
  );
}

// function EmployeeCard(props) {

//   const [role, setRole] = useState(props.initialRole);

//   const clickHandler = () => {
//     console.log("I was clicked");
//     if (role === "Team Lead") {
//       setRole (props.initialRole); 
//     } else {
//       setRole ("Team Lead"); 
//     }

//   }

//   return (
//     <>
//     <div className="card">
//       <div className="card-title">{props.name}</div>
//       <ul className="card-content">
//         Department: {props.department},
//         Role: {role},
//         Salary: {props.salary}
//       </ul>
//         <button onClick={clickHandler}>Promote</button>
//     </div>
//     </>
//   );
// }

export default EmployeeCard