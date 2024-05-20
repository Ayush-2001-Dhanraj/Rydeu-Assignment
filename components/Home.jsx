import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import ProtectedRoute from "./ProtectedRoute";
import { useSelector } from "react-redux";
import Calendar from "./Calendar";
import moment from "moment";

const Home = ({ navigation }) => {
  const { user } = useSelector((state) => state.global);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    if (user) {
      navigation.setOptions({
        title: `${user.account.firstName} ${user.account.lastName}`,
      });
    }
  }, [user]);

  return (
    <ProtectedRoute navigation={navigation}>
      <View style={styles.container}>
        {selectedDate && (
          <>
            <Text style={styles.selectedDateHeader}>Selected Date Time</Text>
            <Text style={styles.selectedDate}>
              {moment(selectedDate).format("dddd - MMMM Do YYYY - h:mm a")}
            </Text>
          </>
        )}
        <Calendar
          setSelectedDate={setSelectedDate}
          selectedDate={selectedDate}
        />
      </View>
    </ProtectedRoute>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { flex: 1 },
  selectedDateHeader: {
    fontSize: 16,
    textAlign: "center",
    paddingTop: 10,
    fontWeight: "bold",
  },
  selectedDate: {
    fontSize: 24,
    textAlign: "center",
    paddingBottom: 10,
  },
});
