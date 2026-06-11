// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { useFonts } from 'expo-font';

// import "./global.css";


// export default function App() {
//   const [fontsLoaded] = useFonts({
//     'QuickSand-Bold': require('./assets/fonts/Quicksand-Bold.ttf'),
//     'QuickSand-Medium': require('./assets/fonts/Quicksand-Medium.ttf'),
//     'QuickSand-Regular': require('./assets/fonts/Quicksand-Regular.ttf'),
//     'QuickSand-SemiBold': require('./assets/fonts/Quicksand-SemiBold.ttf'),
//     'QuickSand-Light': require('./assets/fonts/Quicksand-Light.ttf'),
//   });

//   if (!fontsLoaded) {
//     return null;
//   }

//   return (
//     // <View style={styles.container}>
//     //   <Text>Open up App.js to start working on your app!</Text>
//     //   <StatusBar style="auto" />
//     // </View>

//     <View className="flex-1 items-center justify-center bg-blue-500">
//       <Text className="text-xl font-bold text-white">
//         Welcome to Nativewind!
//       </Text>
      
//     </View>
//   );
// }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// // });




import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import "./global.css"

import AppNavigator from './Navigation/Appnavigator'; 


SplashScreen.preventAutoHideAsync();

const customFonts = {
  "Quicksand-Bold": require("./assets/fonts/Quicksand-Bold.ttf"),
  "Quicksand-Regular": require("./assets/fonts/Quicksand-Regular.ttf"),
  "Quicksand-Medium": require("./assets/fonts/Quicksand-Medium.ttf"),
  "Quicksand-SemiBold": require("./assets/fonts/Quicksand-SemiBold.ttf"),
  "Quicksand-Light": require("./assets/fonts/Quicksand-Light.ttf"),
};

export default function App() {
  const [fontsLoaded, error] = useFonts(customFonts);

  useEffect(() => {
    if (fontsLoaded || error) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (error) {
    throw error;
  }

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AppNavigator />
  );
}