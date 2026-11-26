import { ScrollView, StyleSheet, Text, View } from "react-native";
import Counter from "./components/Counter";
import ProductCard from "./components/ProductCard";
import Timer from "./components/Timer";

export default function App() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.container}>
      <Text style={styles.header}>Практична робота №5</Text>

      <Counter />
      <Timer />

      <View style={styles.products}>
        <ProductCard
          title="Смартфон"
          price={14999}
          image="https://picsum.photos/seed/phone/200"
        />
        <ProductCard
          title="Ноутбук"
          price={21999}
          image="https://picsum.photos/seed/laptop/200"
        />
        <ProductCard
          title="Навушники"
          price={1799}
          image="https://picsum.photos/seed/headphones/200"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#e8f1fb" },
  container: { padding: 16, paddingTop: 50, gap: 20 },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1e3a5f",
    textAlign: "center",
  },
  products: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 12,
  },
});