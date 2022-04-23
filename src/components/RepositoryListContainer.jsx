import { View, FlatList, Text, StyleSheet } from "react-native"
import RepositoryItem from "./RepositoryItem"
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react'
import { Searchbar } from 'react-native-paper';
import { SearchBarMemoized } from "./SearchBar"
import PickerComponent from "./PickerComponent";
import ItemSeparator from "./ItemSeparator"


const RepositoryListContainer = ({ data, loading, orderObj, searchObj, onEndReach }) => {
  const [selectedSorting, setSelectedSorting] = useState('datadesc');  // const { repositories, loading, refetch } = useRepositories() // REST API

  const repositoryNodes = data?.repositories
    ? data?.repositories?.edges.map(edge => edge.node)
    : [];


  const onChangeSearch = query => { return searchObj.setSearchKeywordST(query) }

  return (
    <FlatList
      ListHeaderComponent={
        <>
          <SearchBarMemoized onChangeSearch={onChangeSearch} searchObj={searchObj} />
          <PickerComponent selectedSorting={selectedSorting} orderObj={orderObj} setSelectedSorting={setSelectedSorting} />
        </>
      }
      keyExtractor={(item) => item.id}
      data={repositoryNodes}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
      ItemSeparatorComponent={ItemSeparator}
      // other props
      renderItem={({ item }) => {
        return <RepositoryItem item={item} />
      }}
    />
  );
};

export default RepositoryListContainer