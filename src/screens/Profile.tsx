import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {StoreState} from '../store/storeConfig';
import {logout} from '../store/actions/user';
import {Gravatar} from 'react-native-gravatar';
import {useDispatch, useSelector} from 'react-redux';

export const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  const {email, name} = useSelector<StoreState, any | undefined>(
    state => state.user,
  );

  useEffect(() => {
    console.log('email: ', email);
    console.log('name: ', name);
  }, []);

  const onLogout = () => {
    dispatch(logout());
    navigation.navigate('Auth');
  };

  const options = {email: email, secure: true};
  return (
    <View style={styles.container}>
      <Gravatar options={options} style={styles.avatar}></Gravatar>
      <Text style={styles.nickname}>{name}</Text>
      <Text style={styles.email}>{email}</Text>
      <TouchableOpacity onPress={onLogout} style={styles.buttom}>
        <Text style={styles.buttomText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center'},
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: 100,
  },
  nickname: {
    marginTop: 30,
    fontSize: 30,
    fontWeight: 'bold',
  },
  email: {
    marginTop: 20,
    fontSize: 25,
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
});

export default Profile;
