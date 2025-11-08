import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Rocket } from 'lucide-react-native';
import './global.css';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white gap-3">
      <Rocket color="#111" size={40} />
      <Text className="text-xl font-semibold">Hello from Expo + NativeWind</Text>
      <StatusBar style="auto" />
    </View>
  );
}
