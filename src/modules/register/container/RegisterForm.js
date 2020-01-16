import { RegisterForm } from '../components/RegisterForm';
import { withFormik } from 'formik';
import validateFunc from '../../../utils/validations';

export default withFormik({
  // Custom sync validation
  enableReinitialize: true,
  mapPropsToValues: () => ({
    email: '',
    fullname: '',
    password: '',
    password_2: ''
  }),
  validate: values => {
    let errors = {};
    const validate = validateFunc({ isAuth: false });

    const keys = Object.keys(values);
    keys.forEach(key => validate[key] && validate[key](errors, values[key]));

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: 'RegisterForm' // helps with React DevTools
})(RegisterForm);
