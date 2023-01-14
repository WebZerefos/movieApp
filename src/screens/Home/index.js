import {View, Text} from 'react-native';
import React, {memo, useEffect, useState} from 'react';
import {getPopularMovies} from '../../../services/services';

import styles from './styles';

const Home = () => {
  const [movies, setMovies] = useState('');

  useEffect(() => {
    getPopularMovies().then(mv => setMovies(mv[0]));
  }, []);

  return (
    <View style={styles.container}>
      <Text>{movies.title}</Text>
    </View>
  );
};

export default memo(Home);
