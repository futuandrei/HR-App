import { useState } from "react";
import "./Forms.css";

const Form = ({ role, department, location, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    role: role || "",
    department: department || "",
    location: location || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData); // Pass updated data to parent
  };

  return (
    <div className="employeeEditForm">
      <form onSubmit={handleSubmit}>
        <label>Role:</label>
        <input name="role" value={formData.role} onChange={handleChange} />
        <label>Department:</label>
        <input
          name="department"
          value={formData.department}
          onChange={handleChange}
        />
        <label>Location:</label>
        <input
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
        <button type="submit" className="button">
          Save
        </button>
        <button type="button" className="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default Form;
