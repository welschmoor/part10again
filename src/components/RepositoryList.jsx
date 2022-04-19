import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';
import { GET_REPOSITORIES } from '../graphql/queries';
import useRepositories from '../hooks/useRepositories';
import Amisignedin from './Amisignedin';
import useGetData from '../hooks/useGetData'
import RepositoryListContainer from './RepositoryListContainer'


const RepositoryList = () => {
  const { data, error, loading } = useGetData()

  return <RepositoryListContainer data={data} loading={loading} />
}

export default RepositoryList;


