import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react'; // useState hook'unu import ediyoruz

export default function App() {
  // 'useState' kullanarak bir sayaç durumu oluşturuyoruz.
  // 'count' güncel değer, 'setCount' ise bu değeri güncellemek için kullanılan fonksiyondur.
  const [count, setCount] = useState(0);

  // Butona tıklandığında çalışacak fonksiyon
  const handlePress = () => {
    setCount(count + 1); // Sayacı bir artır
    // Opsiyonel: Her 5 tıklamada bir uyarı göster
    if ((count + 1) % 5 === 0) {
      Alert.alert("Tebrikler!", `Tam ${count + 1} kere tıkladın!`);
    }
  };

  return (
    <View style={styles.container}>
      {/* Özel karşılama mesajı */}
      <Text style={styles.welcomeText}>Merhaba Mobil Dünya!</Text>
      <Text style={styles.subText}>Burada ilk uygulamamı geliştiriyorum.</Text>

      {/* Sayaç metni */}
      <Text style={styles.counterText}>Tıklama Sayısı: {count}</Text>

      {/* Tıklanabilir buton */}
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Bana Tıkla!</Text>
      </TouchableOpacity>

      {/* Ekstra bir buton daha ekleyelim: Sayacı Sıfırla */}
      <TouchableOpacity style={[styles.button, styles.resetButton]} onPress={() => setCount(0)}>
        <Text style={styles.buttonText}>Sıfırla</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff', // Açık mavi arka plan
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20, // Kenarlardan boşluk bırak
  },
  welcomeText: {
    fontSize: 28, // Daha büyük font
    fontWeight: 'bold', // Kalın yazı
    color: '#333', // Koyu gri renk
    marginBottom: 10, // Altına boşluk bırak
  },
  subText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  counterText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#007bff', // Mavi renk
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#28a745', // Yeşil buton rengi
    paddingVertical: 12, // Dikey boşluk
    paddingHorizontal: 25, // Yatay boşluk
    borderRadius: 8, // Köşeleri yuvarla
    marginTop: 15, // Üstten boşluk
    shadowColor: '#000', // Gölge rengi
    shadowOffset: { width: 0, height: 2 }, // Gölge konumu
    shadowOpacity: 0.25, // Gölge opaklığı
    shadowRadius: 3.84, // Gölge bulanıklığı
    elevation: 5, // Android için gölge
  },
  buttonText: {
    color: '#fff', // Beyaz yazı
    fontSize: 18,
    fontWeight: 'bold',
  },
  resetButton: {
    backgroundColor: '#dc3545', // Kırmızı sıfırlama butonu rengi
    marginTop: 10, // Sıfırlama butonu için üstten boşluk
  },
});