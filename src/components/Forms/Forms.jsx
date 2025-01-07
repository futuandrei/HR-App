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
    console.log(formData);
    onSave(formData); // Pass updated data to parent
  };

  return (
    <div>
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
        <div className="formButtonRow">
          <button type="submit" className="button">
            Save
          </button>
          <button type="button" className="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
