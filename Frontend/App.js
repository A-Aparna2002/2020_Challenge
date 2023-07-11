import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './SRC/Screens/LoginSignup/Login/Login';

import EnterEmail from './SRC/Screens/LoginSignup/Signup/EnterEmail';
import EnterVerificationCode from './SRC/Screens/LoginSignup/Signup/EnterVerificationCode';
import EnterUsername from './SRC/Screens/LoginSignup/Signup/EnterUsername';
import EnterPassword from './SRC/Screens/LoginSignup/Signup/EnterPassword';

import FPEnterEmail from './SRC/Screens/LoginSignup/ForgotPassword/FPEnterEmail';
import FPEnterVerificationCode from './SRC/Screens/LoginSignup/ForgotPassword/FPEnterVerificationCode';
import FPEnterPassword from './SRC/Screens/LoginSignup/ForgotPassword/FPEnterPassword';

import MainPage from './SRC/Screens/MainPage/MainPage';
import Guidelines from './SRC/Screens/Guidelines/Guidelines';
import LeaderBoard from './SRC/Screens/LeaderBoard/LeaderBoard';
import Feedback from './SRC/Screens/Feedback/Feedback';

import UserProfile from './SRC/Screens/Profile/UserProfile';
import Settings from './SRC/Screens/Settings/Settings';
import EditProfile from './SRC/Screens/Settings/EditProfile';
import ChangePassword from './SRC/Screens/Settings/ChangePassword';
import UploadProfilePicture from './SRC/Screens/Settings/UploadProfilePicture';
import ChangeUsername from './SRC/Screens/Settings/ChangeUsername';
import ChangeDescription from './SRC/Screens/Settings/ChangeDescription';

import AddBookPost from './SRC/Screens/MainPage/AddBookPost';
import BookOrMovie from './SRC/Screens/MainPage/BookOrMovie';
import AddMoviePost from './SRC/Screens/MainPage/AddMoviePost';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
        animation: 'slide_from_right'
      }}>

        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen name="MainPage" component={MainPage} />

        <Stack.Screen name="EnterEmail" component={EnterEmail} />
        <Stack.Screen name="EnterVerificationCode" component={EnterVerificationCode} />
        <Stack.Screen name="EnterUsername" component={EnterUsername} />
        <Stack.Screen name="EnterPassword" component={EnterPassword} />

        <Stack.Screen name="FPEnterEmail" component={FPEnterEmail} />
        <Stack.Screen name="FPEnterVerificationCode" component={FPEnterVerificationCode} />
        <Stack.Screen name="FPEnterPassword" component={FPEnterPassword} />

        <Stack.Screen name="Guidelines" component={Guidelines} />
        <Stack.Screen name="LeaderBoard" component={LeaderBoard} />
        <Stack.Screen name="Feedback" component={Feedback} />

        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name='UploadProfilePicture' component={UploadProfilePicture} />
        <Stack.Screen name="ChangeUsername" component={ChangeUsername} />
        <Stack.Screen name="ChangeDescription" component={ChangeDescription} />

        <Stack.Screen name='AddBookPost' component={AddBookPost} />
        <Stack.Screen name='AddMoviePost' component={AddMoviePost} />
        <Stack.Screen name='BookOrMovie' component={BookOrMovie} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
