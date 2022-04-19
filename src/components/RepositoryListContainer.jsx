import { View, FlatList, Text, StyleSheet } from "react-native"
import Amisignedin from './Amisignedin';
import RepositoryItem from "./RepositoryItem"


const styles = StyleSheet.create({
  separator: { height: 10 },
});
const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({ data, loading }) => {
  // const { repositories, loading, refetch } = useRepositories() // REST API

  // Get the nodes from the edges array
  const repositoryNodes = data?.repositories
    ? data?.repositories?.edges.map(edge => edge.node)
    : [];

  if (loading) {
    return (<View><Text>Loading...</Text></View>)
  }

  return (
    <>
      {/* <Amisignedin /> */} {/* Commented out because it's a side effect in tests*/}
      <FlatList
        keyExtractor={(item) => item.id}
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        // other props
        renderItem={({ item }) => {
          return <RepositoryItem item={item} />
        }}
      />
    </>
  );
};

export default RepositoryListContainer