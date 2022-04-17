import { Formik } from 'formik';
import Text from './Text';
import FormikForm from './FormikForm'
import * as yup from 'yup';
import { StyleSheet, View } from 'react-native';
import { useMutation } from '@apollo/client';
import { AUTHENTICATE } from '../graphql/mutations';

import AuthStorage from "../utils/authStorage"

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
  const [authenticate, { loading }] = useMutation(AUTHENTICATE)

  const onSubmit = async (values) => {
    const authStorage = new AuthStorage()

    const response = await authenticate({
      variables: {
        username: values.name,
        password: values.password,
      }
    })

    //saving token in storage
    const token = response.data.authenticate.accessToken
    await authStorage.setAccessToken(token)
    console.log("saved token ", await authStorage.getAccessToken())

  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login Page</Text>
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

export default SignIn;

