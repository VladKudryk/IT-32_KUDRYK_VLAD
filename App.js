import { Alert, Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
      <Image
        source={require("./assets/assets/photo.png")}
        style={styles.image}
      />

      <Text style={styles.title}>Мій перший мобільний застосунок</Text>

      <View style={styles.card}>
        <Text style={styles.info}>Студент: Кудрик Влад</Text>
        <Text style={styles.info}>Група: IT-32</Text>
        <Text style={styles.description}>
          Це навчальний застосунок, створений за допомогою React Native та
          Expo. Він демонструє базові компоненти, стилізацію та кнопки.
        </Text>
      </View>

      <Pressable
        style={styles.button}
        onPress={() =>
          Alert.alert("Вітаю!", "Ви створили свій перший застосунок!")
        }
      >
        <Text style={styles.buttonText}>Привітатися</Text>
      </Pressable>

      <Pressable
        style={[styles.button, styles.buttonSecondary]}
        onPress={() =>
          Alert.alert(
            "Про застосунок",
            "Навчальний проєкт на React Native (Expo). Автор: Кудрик Влад, група IT-32."
          )
        }
      >
        <Text style={styles.buttonText}>Про застосунок</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8f1fb",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1e3a5f",
    textAlign: "center",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    width: "100%",
  },
  info: {
    fontSize: 18,
    color: "#333333",
    marginBottom: 6,
  },
  description: {
    fontSize: 16,
    color: "#555555",
    marginTop: 8,
  },
  button: {
    backgroundColor: "#2e7d32",
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 10,
    marginBottom: 12,
  },
  buttonSecondary: {
    backgroundColor: "#1565c0",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
  },
});