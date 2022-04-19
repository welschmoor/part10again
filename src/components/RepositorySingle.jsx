
import { useQuery } from "@apollo/client"
import { StyleSheet, View, Text } from "react-native-web"
import { useParams } from "react-router-native"
import { FETCH_ONE } from "../graphql/queries"
import RepositoryItem from './RepositoryItem'


const RepositorySingle = () => {
  const { id } = useParams()

  const { data, loading } = useQuery(FETCH_ONE, {
    variables: { repositoryId: id }
  })
  console.log("data", data)

  return (
    <View>
      {!loading && <RepositoryItem item={data?.repository} />}
    </View>
  )
}


export default RepositorySingle