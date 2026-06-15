import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, Alert } from "react-native";
import Constants from "expo-constants";

export default function Main() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!!!</Text>
      <Pressable
        style={{ padding: 10, backgroundColor: "lightblue", marginTop: 20 }}
        onPress={() => Alert.alert("Pong!")}
      >
        <Text>Ping</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
