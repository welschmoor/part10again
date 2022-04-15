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
<<<<<<< HEAD
    <Formik initialValues={initialValues} onSubmit={onSubmit} >
      {({handleSubmit}) => <FormikForm onSubmit={handleSubmit} />}
=======
    <Formik onSubmit={onSubmit} initialValues={initialValues} >
      {(handleSubmit) => <FormikForm onSubmit={handleSubmit} />}
>>>>>>> 200b25b09e4bf65490768cb12ee90627fb9d27b3
    </Formik>
  )
};



export default SignIn;

