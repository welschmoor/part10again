
import { AUTHENTICATE } from "../graphql/mutations"
import SignInContainer from "./SignInContainer"
import { useApolloClient, useMutation } from '@apollo/client';

import AuthStorage from "../utils/authStorage"
import { useNavigate } from 'react-router-native';

const SignIn = () => {
  const [authenticate, { loading }] = useMutation(AUTHENTICATE)

  const navigate = useNavigate()
  const apolloClient = useApolloClient()

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
    apolloClient.resetStore()
    navigate('/')
  };

  return <SignInContainer authenticate={authenticate} loading={loading} onSubmit={onSubmit} />
}

export default SignIn