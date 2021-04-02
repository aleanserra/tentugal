import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback as TWF,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const AddComment = () => {
  const [comment, setComment] = useState<string>();
  const [editMode, setEditMode] = useState(false);

  const handleAddComment = () => {
    console.log(comment);
    Alert.alert('Adicionado!', comment);
  };

  const commentHandler = (text: string) => {
    setComment(text);
  };

  const editModeOn = () => {
    setEditMode(false);
  };

  const editModeOff = () => {
    setEditMode(true);
  };

  let renderCommentArea = null;

  if (editMode) {
    renderCommentArea = (
      <View style={styles.container}>
        <TextInput
          placeholder="Comment..."
          style={styles.input}
          autoFocus={true}
          value={comment}
          onChangeText={commentHandler}
          onSubmitEditing={handleAddComment}
        />
        <TWF onPress={editModeOn}>
          <Icon name="times" size={5} color="#555" />
        </TWF>
      </View>
    );
  } else {
    renderCommentArea = (
      <TWF onPress={editModeOff}>
        <View style={styles.container}>
          <Icon name="comment-o" size={25} color="#555" />
          <Text style={styles.caption}>Add comment...</Text>
        </View>
      </TWF>
    );
  }

  return <View style={{flex: 1}}>{renderCommentArea}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  caption: {
    marginLeft: 10,
    fontSize: 12,
    color: '#CCC',
  },
  input: {
    width: '90%',
  },
});

export default AddComment;
