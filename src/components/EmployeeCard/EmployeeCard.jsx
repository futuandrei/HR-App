import { useState } from 'react'
import './EmployeeCard.css'

function EmployeeCard(props) {

  const [role, setRole] = useState(props.initialRole);

  const clickHandler = () => {
    if (role === "Team Lead") {
      setRole (props.initialRole); 
    } else {
      // setRole (`${props.initialRole} / Team Lead`); 
      setRole (`Team Lead`); 
    }

  }

  return (
    <>
    <div className="card">
      <h3 className='card-title'>{props.name}</h3>
      <img 
        src={`https://robohash.org/${props.id}.png?set=set5&size=200x200`} 
        alt={`${props.name}'s avatar`} 
        className="thumbnail" 
      />
      <ul className="card-content">
        <li>{props.department} department</li>
        <li>{props.salary} €</li>
        <li>{role}</li>
        <li>{props.startDate}</li>
        <li>{props.location}</li>
      </ul>
        <button onClick={clickHandler}>Promote</button>
    </div>
    </>
  );
}

export default EmployeeCard