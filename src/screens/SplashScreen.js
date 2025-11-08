import React, { useEffect } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const t = setTimeout(() => navigation.replace('Onboarding'), 1300);
    return () => clearTimeout(t);
  }, []);

  return (
    <SafeAreaView style={styles.centered}>
      <View style={styles.logoCircle}><Icon name="car" size={56} color="#0b1320" /></View>
      <Text style={styles.appTitle}>CarPark</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  logoCircle: { width: 120, height: 120, borderRadius: 60, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', elevation: 6 },
  appTitle: { fontSize: 22, marginTop: 10, fontWeight: '700' },
});
