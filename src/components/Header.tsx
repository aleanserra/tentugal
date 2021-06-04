import React from 'react';
import {StyleSheet, Text, View, Platform, Image} from 'react-native';
import {useSelector} from 'react-redux';
import icon from '../../assets/imgs/icon.png';
import {StoreState} from '../store/storeConfig';
import {Gravatar} from 'react-native-gravatar';

const Header = () => {
  const {email, name} = useSelector<StoreState, any | undefined>(
    state => state.user,
  );
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Image source={icon} style={styles.image} />
        <Text style={styles.title}>Tentúgal</Text>
      </View>
      <View style={styles.userContainer}>
        <Text style={styles.user}>{name || 'Anonymous'}</Text>
        {email && (
          <Gravatar
            options={{email: email, secure: true}}
            style={styles.avatar}></Gravatar>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#BBB',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  title: {
    color: '#000',
    fontFamily: 'shelter',
    height: 'auto',
    width: 100,
    fontSize: 28,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  user: {
    fontSize: 10,
    color: '#888',
  },
  avatar: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
});

export default Header;
