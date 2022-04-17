import { Formik } from 'formik';
import Text from './Text';
import FormikForm from './FormikForm'
import * as yup from 'yup';
import { StyleSheet, View } from 'react-native';
import { useMutation } from '@apollo/client';
import { SIGN_UP } from '../graphql/mutations';
import { useNavigate } from 'react-router-native';

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

const Signup = () => {
  const [signup, { loading }] = useMutation(SIGN_UP)
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    console.log("values<>", values)
    await signup({
      variables: {
        username: values.name,
        password: values.password,
      }
    })

    navigate('/signupRedirect')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create a new account</Text>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({ handleSubmit }) => <FormikForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
    marginLeft: 20,
    marginTop: 20,
  }
})



export default Signup;

