
import { useQuery } from "@apollo/client"
import { View, Text } from "react-native"
import { useParams } from "react-router-native"
import { FETCH_ONE } from "../graphql/queries"
import useFetchOne from '../hooks/useFetchOne'
import ReviewList from "./ReviewList"


const RepositorySingle = () => {
  const { id } = useParams()
  const first = 3

  const { data, loading, fetchMore } = useFetchOne(first, id)

  // if (loading) {
  //   return (
  //     <View>
  //       <Text>Loading...</Text>
  //     </View>
  //   )
  // }

  const onEndReach = () => {
    fetchMore()
    console.log('fetching more Reviews');
  };

  // s.container has a propety flex: 1. ReviewList returns <FlatList>
  // this solves the problem when a list could not be scrolled all the way 
  // down
  return (
    <View style={s.container}>
      <ReviewList data={data?.repository} onEndReach={onEndReach} />
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