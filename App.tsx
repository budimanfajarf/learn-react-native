import { StyleSheet, Text, View } from 'react-native';
import LotsOfGreeting from './components/Greeting';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>

      <LotsOfGreeting />
    </View>
  );
}