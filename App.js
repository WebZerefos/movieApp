import React from 'react';
import {Text, View} from 'react-native';
import axios from 'axios';

const getPopularMovies = async () => {
  const resp = await axios.get(
    'https://api.themoviedb.org/3/movie/popular?api_key=fecd7450ab2f3fb03c1527ccc730a3aa&language=pt-BR',
  );
  console.log(JSON.stringify(resp, null, 2));
};

const App = () => {
  getPopularMovies();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Hello, world!</Text>
    </View>
  );
};

export default App;

// fecd7450ab2f3fb03c1527ccc730a3aa
