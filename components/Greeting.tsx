import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
})

type greetingProps = {
  name: string,
};

const Greeting = (props: greetingProps) => {
  return (
    <View style={styles.center}>
      <Text>Hello {props.name}!</Text>
    </View>
  );
}

export function LotsOfGreeting() {
  return (
    <View style={[styles.center, { top: 50 }]}>
      <Greeting name='Rexxar' />
      <Greeting name='Jaina' />
      <Greeting name='Valeera' />
    </View>
  );
}

export default Greeting;