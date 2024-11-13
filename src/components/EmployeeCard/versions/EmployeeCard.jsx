import { useState } from 'react'
import './EmployeeCard.css'

function EmployeeCard(props) {

  const [role, setRole] = useState(props.initialRole);

  const clickHandler = () => {
    if (role === "Team Lead") {
      setRole (props.initialRole); 
    } else {
      setRole (`${props.initialRole} / Team Lead`); 
    }

  }

  return (
    <>
    <div className="card">
      <img 
        src={`https://robohash.org/${props.id}.png?set=set4&size=200x200`} 
        alt={`${props.name}'s avatar`} 
        className="thumbnail" 
      />
      <ul className="card-content">
        <li>Department: {props.department}</li>
        <li>Salary: {props.salary}</li>
        <li>Role: {role}</li>
        <li>Start Date: {props.startDate}</li>
        <li>Location: {props.location}</li>
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