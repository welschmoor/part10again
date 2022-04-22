
import { useState, useEffect } from 'react';
import useGetData from '../hooks/useGetData'
import RepositoryListContainer from './RepositoryListContainer'
import { useDebounce } from "use-debounce";


const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState('CREATED_AT') // 'CREATED_AT' 'RATING_AVERAGE'
  const [orderDirection, setOrderDirection] = useState('DESC') // 'DESC' 'ASC'
  const [searchKeywordST, setSearchKeywordST] = useState('')
  const [searchKeywordDeb] = useDebounce(searchKeywordST, 3000);
  const { data, error, loading } = useGetData(orderBy, orderDirection, searchKeywordDeb)


  const orderObj = { //this is just to send state to child component
    orderBy,
    setOrderBy,
    orderDirection,
    setOrderDirection,
  }

  const searchObj = {
    searchKeywordDeb,
    searchKeywordST,
    setSearchKeywordST
  }

  return <RepositoryListContainer data={data} loading={loading} orderObj={orderObj} searchObj={searchObj} />

}

export default RepositoryList;


