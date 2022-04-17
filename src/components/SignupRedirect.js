import { Pressable, View, Text } from "react-native"
import { useNavigate } from "react-router-native"

const SignupRedirect = () => {
  const navigate = useNavigate()
  const onPressHandler = () => {
    navigate('/')
  }

  return (

    <View>
      <Text>Account created.</Text>
      <Pressable onPress={onPressHandler}>
        <Text>Go to Main Page</Text>
      </Pressable>
    </View>

  )
}

export default SignupRedirect