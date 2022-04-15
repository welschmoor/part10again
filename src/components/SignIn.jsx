import { Formik } from 'formik';
import Text from './Text';
import FormikForm from './FormikForm'
import * as yup from 'yup';

const initialValues = {
  name: '',
  password: ''
}

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Name must be at least 3 chars long')
    .required('name is required'),
  password: yup
    .string()
    .min(3, 'Password must be longer than 3 characters')
    .required('password is required'),
});

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <FormikForm onSubmit={handleSubmit} />}
    </Formik>
  )
};



export default SignIn;

