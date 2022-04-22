import { View, FlatList, Text, StyleSheet } from "react-native"
import RepositoryItem from "./RepositoryItem"
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react'

const styles = StyleSheet.create({
  separator: { height: 10 },
});
const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({ data, loading, orderObj }) => {
  // const { repositories, loading, refetch } = useRepositories() // REST API
  const [selectedSorting, setSelectedSorting] = useState('datadesc');


  const repositoryNodes = data?.repositories  // Get the nodes from the edges array
    ? data?.repositories?.edges.map(edge => edge.node)
    : [];

  if (loading) {
    return (<View><Text>Loading...</Text></View>)
  }

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
        ListHeaderComponent={PickerComponent}
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