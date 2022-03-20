import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
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
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>

      <Greeting name="Budi" />

      <LotsOfGreeting />

      <View style={{ top: 100 }}>
        <Text>You click the button {count} times</Text>
        <Button
          onPress={() => setCount(count + 1)}
          title="Click Me!"
        />
      </View>
    </View>
  );
}