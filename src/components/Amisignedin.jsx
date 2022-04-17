import { useQuery } from "@apollo/client"
import { Text, View } from "react-native"
import { AM_I_SIGNEDIN } from "../graphql/queries"


const Amisignedin = () => {

  const { data } = useQuery(AM_I_SIGNEDIN)
  console.log("loggg", data?.me?.username)


  return (
    <View>
      {data?.me?.username && <Text>logged in as: {data?.me?.username} </Text>}
      {!data?.me?.username && <Text>not logged in</Text>}
    </View>
  )
}

export default Amisignedin