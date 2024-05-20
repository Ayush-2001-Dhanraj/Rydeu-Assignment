import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useIsFocused } from "@react-navigation/native";

const ProtectedRoute = ({ navigation, children }) => {
  const { user } = useSelector((state) => state.global);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (!user) {
      navigation.navigate("Login");
    }
  }, [user, isFocused]);

  return <>{children}</>;
};

export default ProtectedRoute;
