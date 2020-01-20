import { withFormik } from 'formik';
import validateFunc from '../../../utils/validations';
import { LoginForm } from '../components/AuthForm';

export default withFormik({
  // Custom sync validation
  enableReinitialize: true,
  mapPropsToValues: () => ({
    email: '',
    password: ''
  }),
  validate: values => {
    let errors = {};
    const validate = validateFunc({ isAuth: true });

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

  displayName: 'LoginForm' // helps with React DevTools
})(LoginForm);
