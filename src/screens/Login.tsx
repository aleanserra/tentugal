import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {login} from '../store/actions/user';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
} from 'react-native';

export const Login = ({navigation}) => {
  const dispath = useDispatch();
  const [name, setName] = useState<string>('Temporario');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onLogin = () => {
    const user = {
      email: email,
      name: name,
    };
    navigation.navigate('Profile');
    dispath(login(user));
  };

  const createAcc = () => {
    navigation.navigate('Register');
  };

  const emailHandler = (text: string) => {
    setEmail(text);
  };

  const passwordHandler = (text: string) => {
    setPassword(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        style={styles.input}
        autoFocus={true}
        keyboardType="email-address"
        value={email}
        onChangeText={emailHandler}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry={true}
        value={password}
        onChangeText={passwordHandler}
      />
      <TouchableOpacity onPress={onLogin} style={styles.buttom}>
        <Text style={styles.buttomText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={createAcc} style={styles.buttom}>
        <Text style={styles.buttomText}>Create account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    backgroundColor: '#EEE',
    height: 40,
    borderWidth: 1,
    borderColor: '#333',
  },
});

export default Login;
