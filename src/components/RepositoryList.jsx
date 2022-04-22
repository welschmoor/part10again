
import { useState, useEffect } from 'react';
import useGetData from '../hooks/useGetData'
import RepositoryListContainer from './RepositoryListContainer'
import { useDebounce } from "use-debounce";


const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState('CREATED_AT') // 'CREATED_AT' 'RATING_AVERAGE'
  const [orderDirection, setOrderDirection] = useState('DESC') // 'DESC' 'ASC'
  const [searchKeywordST, setSearchKeywordST] = useState('')
  const [searchKeywordDeb] = useDebounce(searchKeywordST, 2000);
  const first = 4
  const { data, error, loading, fetchMore } = useGetData(orderBy, orderDirection, searchKeywordDeb, first)


  const orderObj = { //this is just to send state to child component
    orderBy,
    setOrderBy,
    orderDirection,
    setOrderDirection,
  }

  const searchObj = { //same
    searchKeywordDeb,
    searchKeywordST,
    setSearchKeywordST
  }

  const onEndReach = () => {
    fetchMore()
    console.log('You have reached the end of the list');
  };

  return <RepositoryListContainer data={data} loading={loading} orderObj={orderObj} searchObj={searchObj} onEndReach={onEndReach} />

}

export default RepositoryList;


