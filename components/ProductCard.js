import { useState } from "react";
import { Alert, Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function ProductCard({ title, price, image }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <Pressable
      style={styles.card}
      onLongPress={() =>
        Alert.alert(title, `Ціна: ${price} грн\nВ обраному: ${isFavorite ? "так" : "ні"}`)
      }
    >
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price} грн</Text>

      <Pressable
        style={({ pressed }) => [
          styles.button,
          isFavorite && styles.buttonActive,
          pressed && styles.pressed,
        ]}
        onPress={toggleFavorite}
      >
        <Text style={styles.buttonText}>
          {isFavorite ? "В обраному" : "В обране"}
        </Text>
      </Pressable>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 150,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#c5d3e3",
    borderRadius: 12,
    padding: 10,
    alignItems: "center",
    gap: 6,
  },
  image: { width: 120, height: 120, borderRadius: 8 },
  title: { fontSize: 16, fontWeight: "bold", color: "#1e3a5f", textAlign: "center" },
  price: { fontSize: 14, color: "#555555" },
  button: {
    backgroundColor: "#1565c0",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    margin: 4,
  },
  buttonActive: { backgroundColor: "#c62828" },
  pressed: { opacity: 0.5 },
  buttonText: { color: "#ffffff", fontSize: 14, fontWeight: "600" },
});