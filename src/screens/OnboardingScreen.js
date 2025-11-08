import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Dimensions, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PillButton from '../components/PillButton';

const { width } = Dimensions.get('window');

export default function OnboardingScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
        <View style={styles.slide}>
          <View style={styles.slideCard}><Icon name="car-sports" size={64} /></View>
          <Text style={styles.slideTitle}>Find parking made easy</Text>
          <Text style={styles.slideText}>Search, book and charge — all from one app.</Text>
          <PillButton label="Get Started" onPress={() => navigation.replace('Home')} />
        </View>
        <View style={styles.slide}>
          <View style={styles.slideCard}><Icon name="bolt" size={64} /></View>
          <Text style={styles.slideTitle}>Charge with confidence</Text>
          <Text style={styles.slideText}>See charger status and monitor charging progress.</Text>
          <PillButton label="Next" onPress={() => navigation.replace('Home')} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f2f2' },
  slide: { width, padding: 24, alignItems: 'center' },
  slideCard: { width: 160, height: 160, borderRadius: 16, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', elevation: 4 },
  slideTitle: { fontSize: 20, fontWeight: '700', marginTop: 18 },
  slideText: { textAlign: 'center', marginTop: 8, opacity: 0.8 },
});
