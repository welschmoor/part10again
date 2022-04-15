import { View, Pressable, Text } from "react-native"
import FormikTextInput from "./FormikTextInput"

const FormikForm = ({ onSubmit }) => {
  return (

    <View >
      <FormikTextInput name="name" placeholder="Weight (kg)" />
      <FormikTextInput name="password" placeholder="Height (m)" />
      <Pressable onPress={onSubmit}>
        <Text>Submit</Text>
      </Pressable>
    </View>

  )
}

export default FormikForm