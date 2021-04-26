import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  ImageSourcePropType,
} from 'react-native';
import Author from './Author';
import CommentsList from './Comments';
import AddComment from './AddComment';
import {CommentListProps} from '../libraries/comments';

export interface PostProps {
  image?: ImageSourcePropType;
  comments: CommentListProps[];
  email: string;
  nickname: string;
}

export const Post = ({image, comments, email, nickname}: PostProps) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Author email={email} nickname={nickname}></Author>
      <CommentsList comments={comments} />
      <AddComment />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: Dimensions.get('window').width,
    height: (Dimensions.get('window').width * 3) / 4,
    resizeMode: 'contain',
  },
});

export default Post;
