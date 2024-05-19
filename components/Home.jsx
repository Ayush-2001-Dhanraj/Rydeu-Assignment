import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useIsFocused } from "@react-navigation/native";

const Home = ({ navigation }) => {
  const { user } = useSelector((state) => state.global);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (!user) navigation.navigate("Login");
  }, [user, isFocused]);

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
