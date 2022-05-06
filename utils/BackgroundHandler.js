import RNCallKeep from 'react-native-callkeep';

export default async () => {
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
  RNCallKeep.displayIncomingCall('1234', 'ashish', 'ashish', 'generic');
};
