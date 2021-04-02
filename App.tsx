import React from 'react';
import Header from './src/components/Header';
import {View, Text} from 'react-native';
import Post from './src/components/Post';

const App = () => {
  const comments = [
    {
      index: 1,
      nickname: 'Ana Serra',
      comment: 'Critica construtiva.',
    },
    {
      index: 2,
      nickname: 'Cássia tc',
      comment: 'Pede suave pra nois.',
    },
  ];

  return (
    <View style={{flex: 1}}>
      <Header />
      <Post
        comments={comments}
        image={require('./assets/imgs/fence.jpg')}></Post>
    </View>
  );
};

export default App;
