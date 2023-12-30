import { BlurView } from 'expo-blur';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import LoginScreen from './screens/LoginScreen';


export default function App() {
  return (
    <>
      <LoginScreen title="Get Started Free" subTitle="Free Forever. No Credit Card Needed" />
    </>
  );
}

