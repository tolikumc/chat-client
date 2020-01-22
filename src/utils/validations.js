const validateFunc = ({ isAuth }) => ({
  email: (errors, value) => {
    if (!value) {
      errors.email = 'Enter email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      errors.email = 'Invalid email address';
    }
  },
  password: (errors, value) => {
    if (!value) {
      errors.password = 'Enter password';
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value)) {
      errors.password = isAuth ? 'Incorrect password' : 'To easy password';
    }
  }
});

export default validateFunc;
