import classes from "./Licence.module.scss";

const Licence = ({ formData }) => {
  return (
    <div className={classes.licence}>
      <div className={`${classes.top} ${classes[formData.state] || ""}`}>
        <h1>Driver Licence </h1>
        <h3>{formData.state} Australia</h3>
      </div>
      <div className={classes.bottom}>
        <div>
          {formData.title && formData.name ? (
            <p>
              {formData.title} {formData.name}
            </p>
          ) : (
            <p>Title, Name</p>
          )}
          {formData.address ? <p> {formData.address}</p> : <p>Address</p>}

          <p>Licence No.</p>
        </div>
        <div className={classes.dateOfBirth}>
          <p>Date of Birth</p>
          {formData.DOB && <p> {formData.DOB}</p>}
        </div>
        <div>
          <p>Card Number</p>
          <p>Photo</p>
          <p>Expiry Date</p>
        </div>
      </div>
    </div>
  );
};

export default Licence;
