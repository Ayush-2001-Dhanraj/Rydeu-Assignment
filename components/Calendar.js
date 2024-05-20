import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import moment from "moment";
import DateTimePicker from "@react-native-community/datetimepicker";

const Calendar = ({ selectedDate, setSelectedDate }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const startDate = moment().startOf("month");
  const months = Array.from({ length: 6 }, (_, i) =>
    startDate.clone().add(i, "months")
  );

  const handleDatePress = (date) => {
    console.log(date);
    setSelectedDate(new Date(date));
    setDatePickerVisibility(true);
  };

  const handleConfirm = (event, time) => {
    const currentTime = time || selectedDate;
    setDatePickerVisibility(false);
    setSelectedDate(currentTime);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {months.map((month, index) => (
          <View key={index} style={styles.monthContainer}>
            <Text style={styles.monthTitle}>{month.format("MMMM YYYY")}</Text>
            <View style={styles.daysContainer}>
              {Array.from({ length: month.daysInMonth() }, (_, i) => {
                const day = month.clone().date(i + 1);
                const isSelected = moment(selectedDate).isSame(day, "day");
                return (
                  <TouchableOpacity
                    key={i}
                    style={[styles.day, isSelected && styles.selectedDay]}
                    onPress={() => handleDatePress(day)}
                  >
                    <Text style={isSelected ? styles.selectedDayText : null}>
                      {i + 1}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        ))}
      </ScrollView>
      {isDatePickerVisible && (
        <DateTimePicker
          value={selectedDate}
          mode="time"
          display="default"
          onChange={handleConfirm}
        ></DateTimePicker>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 6,
    paddingTop: 6,
    backgroundColor: "#fff",
    flex: 1,
  },
  monthContainer: {
    marginBottom: 20,
  },
  monthTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  daysContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  day: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  selectedDay: {
    backgroundColor: "#007bff",
    borderColor: "#007bff",
  },
  selectedDayText: {
    color: "#fff",
  },
});

export default Calendar;
