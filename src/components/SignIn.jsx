import { Formik } from 'formik';
import Text from './Text';
import FormikForm from './FormikForm'

const initialValues = {
  name: '',
  password: ''
}

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik onSubmit={onSubmit} initialValues={initialValues} >
      {(handleSubmit) => <FormikForm onSubmit={handleSubmit} />}
    </Formik>
  )
};



export default SignIn;

