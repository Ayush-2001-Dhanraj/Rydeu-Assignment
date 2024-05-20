import axios from "axios";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { setUser } from "../redux/globalSlice";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = async () => {
    if (username && password) {
      try {
        const res = await axios.post(`${BASE_URL}/login`, {
          email: username,
          password,
          type: "customer",
        });
        if (res.data.status === 200) {
          setUsername("");
          setPassword("");
          dispatch(setUser(res.data.data.user));
          navigation.navigate("Home");
        } else {
          alert(res.data.message || "Incorrect Credentials.");
        }
      } catch (error) {
        alert("Please enter valid Credentials.");
      }
    } else {
      alert("Username & Password is required.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});
