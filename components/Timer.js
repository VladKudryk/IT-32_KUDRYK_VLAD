import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <View style={styles.box}>
      <Text style={styles.title}>Таймер</Text>
      <Text style={styles.seconds}>{seconds} с</Text>
      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        onPress={() => setSeconds(0)}
      >
        <Text style={styles.buttonText}>Скинути таймер</Text>
      </Pressable>
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
  seconds: { fontSize: 36, fontWeight: "bold", color: "#2e7d32" },
  button: {
    backgroundColor: "#1565c0",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  pressed: { opacity: 0.5 },
  buttonText: { color: "#ffffff", fontSize: 16, fontWeight: "600" },
});