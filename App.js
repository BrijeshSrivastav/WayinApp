import React from 'react';
import AppNavigator from './src/AppNavigator';
import store from "./src/redux/store";
import { Provider } from "react-redux";
import { LogBox } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs()

const App = () => {

  return (
  <Provider store={store}>
  <AppNavigator />
 </Provider>
  );
};

export default App;
