import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
interface ImageProps {
  uri: any;
  base64: any;
}

const AddPhoto = () => {
  const [image, setImage] = useState<ImageProps>();
  const [comment, setComment] = useState('');

  const pickImage = () => {
    launchCamera(
      {
        mediaType: 'photo',
        maxHeight: 600,
        maxWidth: 800,
      },
      res => {
        if (!res.didCancel) {
          setImage({uri: res?.uri, base64: res?.base64});
        }
      },
    );
  };

  const save = async () => {
    Alert.alert('Imagem adicionada', comment);
  };

  const updateComment = (e: any) => {
    setComment(e?.target?.value);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Compartilhe uma imagem</Text>
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image}></Image>
        </View>
        <TouchableOpacity onPress={pickImage} style={styles.buttom}>
          <Text style={styles.buttomText}>Escolha a foto</Text>
        </TouchableOpacity>
        <TextInput
          placeholder="Algum comentário para a foto?"
          style={styles.input}
          value={comment}
          onChangeText={updateComment}
        />
        <TouchableOpacity onPress={save} style={styles.buttom}>
          <Text style={styles.buttomText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginTop: Platform.OS === 'ios' ? 30 : 20,
    fontWeight: 'bold',
  },
  imageContainer: {
    width: '90%',
    height: (Dimensions.get('window').width * 3) / 4,
    backgroundColor: '#EEE',
    marginTop: 10,
  },
  image: {
    width: Dimensions.get('window').width,
    height: (Dimensions.get('window').width * 3) / 4,
    resizeMode: 'center',
  },
  buttom: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#4286f4',
  },
  buttomText: {
    fontSize: 20,
    color: '#FFF',
  },
  input: {
    marginTop: 20,
    width: '90%',
  },
});

export default AddPhoto;
