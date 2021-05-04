import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export const Register = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const nameHandler = (name: string) => {
    setName(name);
  };
  const emailHandler = (email: string) => {
    setEmail(email);
  };
  const passwordHandler = (password: string) => {
    setPassword(password);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Name"
        style={styles.input}
        autoFocus={true}
        value={name}
        onChangeText={nameHandler}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        autoFocus={true}
        value={email}
        onChangeText={emailHandler}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        autoFocus={true}
        value={password}
        onChangeText={passwordHandler}
      />
      <TouchableOpacity onPress={() => {}} style={styles.buttom}>
        <Text style={styles.buttomText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justfyContent: 'center',
  },
  buttom: {
    marginTop: 30,
    padding: 10,
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
    paddingLeft: 15,
  },
});

export default Register;
