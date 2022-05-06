/**
 * @format
 */

import {AppRegistry, PermissionsAndroid} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import RNCallKeep from 'react-native-callkeep';
import messaging from '@react-native-firebase/messaging';
import BackgroundHandler from './utils/BackgroundHandler';

const options = {
  ios: {
    appName: 'My app name',
  },
  android: {
    alertTitle: 'Permissions required',
    alertDescription: 'This application needs to access your phone accounts',
    cancelButton: 'Cancel',
    okButton: 'ok',
    imageName: 'phone_account_icon',

    // Required to get audio in background when using Android 11
    foregroundService: {
      channelId: 'com.company.my',
      channelName: 'Foreground service for my app',
      notificationTitle: 'My app is running on background',
      notificationIcon: 'Path to the resource icon of the notification',
    },
  },
};

RNCallKeep.setup(options);
RNCallKeep.setAvailable(true);
// Register background handler
messaging().setBackgroundMessageHandler(BackgroundHandler);

AppRegistry.registerComponent(appName, () => App);
