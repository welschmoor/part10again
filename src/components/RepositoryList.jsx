import { useState, useEffect } from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';
import useRepositories from '../hooks/useRepositories';
import RepositoryItem from "./RepositoryItem"


const styles = StyleSheet.create({
  separator: { height: 10 },
});


const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { repositories, loading, refetch } = useRepositories()

  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];
    
  if (loading) {
    return (<View><Text>Loading...</Text></View>)
  }

  return (``
    <FlatList
      keyExtractor={(item) => item.id}
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      // other props
      renderItem={({ item }) => {
        return <RepositoryItem item={item} />
      }}
    />
  );
};

export default RepositoryList;


