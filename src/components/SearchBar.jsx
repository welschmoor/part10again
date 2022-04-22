import React from "react"
import { Searchbar } from 'react-native-paper';

const SearchBar = ({ searchObj, onChangeSearch }) => {
  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchObj.searchKeywordST}
    />
  )
}

export const SearchBarMemoized = React.memo(SearchBar)