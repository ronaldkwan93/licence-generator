import { useRef, useState } from "react";
import classes from "./Form.module.scss";
import { validateForm } from "../../validation/validateForm";

const Form = ({ stateData, getFormData }) => {
  const [errors, setErrors] = useState({});

  const formRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    console.log(formData);
    const formValues = Object.fromEntries(formData);
    console.log(formValues);
    setErrors({});
    const validationErrors = validateForm(formValues);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    getFormData(formValues);

    // const formData = new FormData(e.currentTarget);
    // console.log(formData)
    // // const formValues = Object.fromEntries(formData);

    // getFormData(formValues);
  };
  return (
    <form className={classes.form} onSubmit={handleSubmit} ref={formRef}>
      <label htmlFor="nameInput">Name:</label>
      <input type="text" id="nameInput" name="name" />
      {errors.name && <p className={classes.red}>{errors.name}</p>}
      <label htmlFor="titleInput">Title:</label>
      <input type="text" id="titleInput" name="title" />
      {errors.title && <p className={classes.red}>{errors.title}</p>}
      <label htmlFor="DOBInput">DOB:</label>
      <input type="date" id="DOBInput" name="DOB" />
      {errors.dateOfBirth && 
        <p className={classes.red}>{errors.dateOfBirth}</p>
      }
      <label htmlFor="stateInput">State</label>
      <select type="text" id="stateInput" name="state">
        {stateData.states.map((state) => (
          <option key={state.name}>{state.code}</option>
        ))}
      </select>
      <label htmlFor="addressInput">Address:</label>
      <input type="text" id="addressInput" name="address" />
      {errors.address && <p className={classes.red}>{errors.address}</p>}
      <button>Submit</button>
    </form>
  );
};

export default Form;
