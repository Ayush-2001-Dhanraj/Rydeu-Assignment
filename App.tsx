import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./components/Home";
import Login from "./components/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginIcon from "./components/LoginIcon";
import LogoutButton from "./components/LogoutButton";

const Stack = createNativeStackNavigator();


function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerTitle: () => <LoginIcon />,
              headerBackVisible: false,
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Home", headerBackVisible: false, headerRight: () => <LogoutButton /> }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

export default App;
