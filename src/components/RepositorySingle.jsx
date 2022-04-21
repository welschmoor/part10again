
import { useQuery } from "@apollo/client"
import { StyleSheet, View, Text } from "react-native"
import { useParams } from "react-router-native"
import { FETCH_ONE } from "../graphql/queries"
import RepositoryItem from './RepositoryItem'
import ReviewList from "./ReviewList"




const RepositorySingle = () => {
  const { id } = useParams()

  const { data, loading } = useQuery(FETCH_ONE, {
    variables: { repositoryId: id },
    fetchPolicy: 'cache-and-network',
  })

  // s.container has a propety flex: 1. ReviewList returns <FlatList>
  // this solves the problem when a list could not be scrolled all the way 
  // down

  if (loading) {
    return(
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }
  return (
    <View style={s.container}>
      <ReviewList data={data?.repository} />
    </View>
  )
}

const s = {
  container: {
    // paddingBottom: 90,
    flex: 1
  }
}


export default RepositorySingle