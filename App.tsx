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

  const term = count > 1 ? 'times' : 'time';

  const text = count === 0
    ? `You haven't click the button`
    : `You click the button ${count} ${term}`;

  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>

      <Greeting name="Budi" />

      <LotsOfGreeting />

      <View style={{ top: 100 }}>
        <Text>{text}</Text>
        <Button
          onPress={() => setCount(count + 1)}
          title="Click Me!"
        />
      </View>

      <View style={{ top: 150 }}>
        <Text>First feature</Text>
      </View>
    </View>
  );
}