import { StyleSheet, Text, View } from 'react-native';
import Greeting from './components/Greeting';
import { LotsOfGreeting } from './components/Greeting';

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

      <Greeting name="Budi" />

      <LotsOfGreeting />
    </View>
  );
}