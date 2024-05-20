import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/globalSlice";

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setUser(null));
  };

  return (
    <TouchableOpacity onPress={handleLogout}>
      <View style={styles.iconContainer}>
        <FontAwesomeIcon icon={faRightFromBracket} />
      </View>
    </TouchableOpacity>
  );
};

export default LogoutButton;

const styles = StyleSheet.create({
  iconContainer: {
    borderRadius: 10,
    padding: 10,
    borderWidth: 2,
  },
});
