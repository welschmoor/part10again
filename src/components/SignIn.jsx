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
    <Formik initialValues={initialValues} onSubmit={onSubmit} >
      {({handleSubmit}) => <FormikForm onSubmit={handleSubmit} />}
    </Formik>
  )
};



export default SignIn;

