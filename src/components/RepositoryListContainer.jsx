import { View, FlatList, Text, StyleSheet } from "react-native"
import RepositoryItem from "./RepositoryItem"
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react'
import { Searchbar } from 'react-native-paper';
import { SearchBarMemoized } from "./SearchBar"


const styles = StyleSheet.create({
  separator: { height: 10 },
});
const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({ data, loading, orderObj, searchObj, onEndReach }) => {
  // const { repositories, loading, refetch } = useRepositories() // REST API
  const [selectedSorting, setSelectedSorting] = useState('datadesc');


  const repositoryNodes = data?.repositories  // Get the nodes from the edges array
    ? data?.repositories?.edges.map(edge => edge.node)
    : [];

  if (loading) {
    return (<View><Text>Loading...</Text></View>)
  }

  const onChangeSearch = query => { return searchObj.setSearchKeywordST(query) }


  const pickerFn = (itemValue) => {
    if (itemValue === "dataasc") {
      orderObj.setOrderBy('CREATED_AT')
      orderObj.setOrderDirection('ASC')
    } else if (itemValue === "dataasc") {
      orderObj.setOrderBy('CREATED_AT')
      orderObj.setOrderDirection('DESC')
    } else if (itemValue === "ratingasc") {
      orderObj.setOrderBy('RATING_AVERAGE')
      orderObj.setOrderDirection('ASC')
    } else if (itemValue === "ratingdesc") {
      orderObj.setOrderBy('RATING_AVERAGE')
      orderObj.setOrderDirection('DESC')
    }
    setSelectedSorting(itemValue)
  }

  const PickerComponent = () => {
    return (
      <Picker
        selectedValue={selectedSorting}
        onValueChange={(itemValue, itemIndex) =>
          pickerFn(itemValue)
        }>
        <Picker.Item label="Sort by date - ascending" value="dataasc" />
        <Picker.Item label="Sort by date - descending" value="datadesc" />
        <Picker.Item label="Sort by rating - ascending" value="ratingasc" />
        <Picker.Item label="Sort by rating - descending" value="ratingdesc" />
      </Picker>
    )
  }

  return (
    <>
      {/* <Amisignedin /> */}
      <FlatList
        ListHeaderComponent={
          <>
            <SearchBarMemoized onChangeSearch={onChangeSearch} searchObj={searchObj} />
            <Picker
              selectedValue={selectedSorting}
              onValueChange={(itemValue, itemIndex) =>
                pickerFn(itemValue)
              }>
              <Picker.Item label="Sort by date - ascending" value="dataasc" />
              <Picker.Item label="Sort by date - descending" value="datadesc" />
              <Picker.Item label="Sort by rating - ascending" value="ratingasc" />
              <Picker.Item label="Sort by rating - descending" value="ratingdesc" />
            </Picker>
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
    </>
  );
};

export default RepositoryListContainer