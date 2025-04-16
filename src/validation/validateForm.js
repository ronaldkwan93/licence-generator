export const validateForm = (formData) => {
  let isValid = true;
  const errors = {};

  if (formData.name === "") {
    isValid = false;
    errors.name = "Name can't be empty";
  }

  if (formData.title === "") {
    isValid = false;
    errors.title = "Title can't be empty";
  }

  if (formData.DOB === "") {
    isValid = false;
    errors.dateOfBirth = "Please choose a date";
  }

  if (formData.address === "") {
    isValid = false;
    errors.address = "Please choose a date";
  }
  // if (formData.email === '') {
  //     isValid = false;
  //     errors.email = 'Email cannot be empty';
  // }

  // if(!/[A-Z]/.test(formData.password)) {
  //     isValid = false;
  //     errors.password = 'Password must contain a number';
  // }

  // if(formData.password.length < 6) {
  //     isValid = false;
  //     errors.password = 'Password must contain at least 6 characters'
  // }

  // if(formData.password !== formData.passwordConfirm) {
  //     isValid = false;
  //     errors.passwordConfirm = 'Both passwords must be the same'
  // }
  return errors;
};
