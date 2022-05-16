import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
})

type GreetingProps = {
  name: string,
};

export function Greeting (props: GreetingProps) {
  return (
    <View style={styles.center}>
      <Text>Hello {props.name}!</Text>
    </View>
  );
}

export function LotsOfGreeting(props: {
  items: Array<GreetingProps>,
}) {
  return (
    <View style={[styles.center, { top: 50 }]}>
      {props.items.map((item: GreetingProps) => (
        <Greeting key={item.name} name={item.name} />
      ))}
    </View>
  );
}