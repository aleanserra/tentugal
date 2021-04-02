import React, {useState} from 'react';
import {StyleSheet, FlatList, View, ImageSourcePropType} from 'react-native';
import Header from '../components/Header';
import Post from '../components/Post';

export interface Comment {
  nickname?: string;
  comment?: string;
}

export interface PostProps {
  id?: number;
  nickname?: string;
  email?: string;
  image?: ImageSourcePropType;
  comments?: Comment[];
}

const Feed = () => {
  const postTest = [
    {
      id: 1,
      nickname: 'Rafael Pereira Filho',
      email: 'rafaelpf@gmail.com',
      image: require('../../assets/imgs/fence.jpg'),
      //   image: require('../../assets/imgs/fance.jpg'),
      comments: [
        {
          nickname: 'José Pirula',
          comment: 'Stunning',
        },
        {
          nickname: 'Ana Julia Arruda',
          comment: 'Foto linda! onde foi tirada?',
        },
      ],
    },
    {
      id: 2,
      nickname: 'Francis Leandro',
      email: 'fl@gmail.com',
      image: require('../../assets/imgs/bw.jpg'),
      comments: [],
    },
  ];

  const [posts, setPosts] = useState<PostProps[]>(postTest);

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={posts}
        keyExtractor={item => `${item.id}`}
        renderItem={({item}) => (
          <Post
            key={item.id}
            image={item.image}
            comments={item.comments}
            email={item.email}
            nickname={item.nickname}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default Feed;
