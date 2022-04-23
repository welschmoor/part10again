
import { View, Text, StyleSheet } from 'react-native'
import useMe from '../hooks/useMe'



const MyReviews = () => {
  const { data } = useMe(true)
  // console.log("useMe data<><>", data)

  return (
    <View style={s.MW}>
      <Text>My Reviews Test</Text>
    </View>
  )
}


const s = StyleSheet.create({
  MW: {
    padding: 20,
    flex: 1,
    backgroundColor: "white",
  }
})

export default MyReviews