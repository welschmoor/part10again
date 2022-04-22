
import { useState, useEffect } from 'react';
import useGetData from '../hooks/useGetData'
import RepositoryListContainer from './RepositoryListContainer'


const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState('CREATED_AT') // 'CREATED_AT' 'RATING_AVERAGE'
  const [orderDirection, setOrderDirection] = useState('DESC') // 'DESC' 'ASC'
  const { data, error, loading } = useGetData(orderBy, orderDirection)

  const orderObj = {
    orderBy,
    setOrderBy,
    orderDirection,
    setOrderDirection,
  }

  return <RepositoryListContainer data={data} loading={loading} orderObj={orderObj} />

}

export default RepositoryList;


