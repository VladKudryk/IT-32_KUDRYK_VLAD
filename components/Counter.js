import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Значення лічильника:", count);
  }, [count]);

  return (
    <View style={styles.box}>
      <Text style={styles.title}>Лічильник</Text>

      <Text
        style={[
          styles.counter,
          count > 0 && styles.positive,
          count > 10 && styles.warning,
        ]}
      >
        {count}
      </Text>

      <View style={styles.buttons}>
        <Pressable
          style={({ pressed }) => [styles.button, pressed && styles.pressed]}
          onPress={() => setCount((prev) => Math.max(0, prev - 1))}
        >
          <Text style={styles.buttonText}>−</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [styles.button, pressed && styles.pressed]}
          onPress={() => setCount((prev) => prev + 1)}
        >
          <Text style={styles.buttonText}>+</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.button,
            styles.reset,
            pressed && styles.pressed,
          ]}
          onPress={() => setCount(0)}
        >
          <Text style={styles.buttonText}>Скинути</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#c5d3e3",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    gap: 10,
  },
  title: { fontSize: 20, fontWeight: "bold", color: "#1e3a5f" },
  counter: { fontSize: 48, fontWeight: "bold", color: "gray" },
  positive: { color: "green" },
  warning: { color: "red" },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  button: {
    backgroundColor: "#1565c0",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  reset: { backgroundColor: "#6d4c41" },
  pressed: { opacity: 0.5 },
  buttonText: { color: "#ffffff", fontSize: 18, fontWeight: "600" },
});