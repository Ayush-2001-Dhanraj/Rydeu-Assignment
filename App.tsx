import React from 'react';
import { SafeAreaView, StatusBar, Text, StyleSheet, View, } from 'react-native';

function App(): React.JSX.Element {



  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.container}>

        <Text>Hello </Text>
      </View>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    height: '100%',
  },
  subtitle: {
    fontSize: 12,
    marginBottom: 10
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center',
    marginBottom: 10
  }
});

export default App;
