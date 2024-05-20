import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

const LoginIcon = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <FontAwesomeIcon icon={faArrowRightToBracket} />
      </View>
    </View>
  );
};

export default LoginIcon;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  iconContainer: {
    borderRadius: 10,
    padding: 10,
    marginRight: 30,
    borderWidth: 2,
  },
});
