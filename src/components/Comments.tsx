import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const renderComment = ({nickname, comment, id}) => {
  return (
    <View style={styles.commentContainer} key={id}>
      <Text style={styles.nickname}>{nickname}: </Text>
      <Text style={styles.comment}>{comment}</Text>
    </View>
  );
};

const renderCommentList = (comments: any[]) => {
  if (!comments || !Array.isArray(comments)) return 'No comments...';
  return comments.map(renderComment);
};

export const CommentsList = ({comments}) => {
  return (
    <View style={styles.container}>
      <Text> {renderCommentList(comments)} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  commentContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  nickname: {
    marginLeft: 5,
    fontWeight: 'bold',
    color: '#444',
  },
  comment: {
    color: '#555',
  },
});

export default CommentsList;
