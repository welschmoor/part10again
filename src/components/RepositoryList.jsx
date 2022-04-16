import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';
import { GET_REPOSITORIES } from '../graphql/queries';
import useRepositories from '../hooks/useRepositories';
import RepositoryItem from "./RepositoryItem"


const styles = StyleSheet.create({
  separator: { height: 10 },
});


const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  // const { repositories, loading, refetch } = useRepositories() // REST API
  
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network"
  })


  // Get the nodes from the edges array
  const repositoryNodes = data?.repositories
    ? data?.repositories?.edges.map(edge => edge.node)
    : [];


  if (loading) {
    return (<View><Text>Loading...</Text></View>)
  }

  return (
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


