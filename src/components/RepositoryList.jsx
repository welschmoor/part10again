
import { useState, useEffect } from 'react';
import useGetData from '../hooks/useGetData'
import RepositoryListContainer from './RepositoryListContainer'


const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState('CREATED_AT') // 'CREATED_AT' 'RATING_AVERAGE'
  const [orderDirection, setOrderDirection] = useState('DESC') // 'DESC' 'ASC'
  const { data, error, loading } = useGetData(orderBy, orderDirection)

  return <RepositoryListContainer data={data} loading={loading} />
  
}

export default RepositoryList;


