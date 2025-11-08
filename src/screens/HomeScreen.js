import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.headerTitle}>Made easily Parking</Text>
        <TouchableOpacity style={styles.roundIcon}><Icon name="account-circle" size={24} /></TouchableOpacity>
      </View>

      <View style={styles.mapPlaceholder}><Text style={{ color: '#fff', opacity: 0.8 }}>Map placeholder</Text></View>

      <View style={styles.cardFloat}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={styles.smallCar}><Icon name="car" size={26} color="#fff" /></View>
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.cardTitle}>Book your car Parking</Text>
            <Text style={styles.cardSubtitle}>A-013 • 2h</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.primaryBtn} onPress={() => navigation.navigate('Booking')}><Text style={{ color: '#fff' }}>Start Booking</Text></TouchableOpacity>
      </View>

      <View style={{ padding: 20 }}>
        <Text style={styles.sectionTitle}>Nearby chargers</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {[0, 1, 2].map(i => (
            <TouchableOpacity key={i} style={styles.chargerCard} onPress={() => navigation.navigate('Charging')}>
              <Text style={{ fontWeight: '700' }}>SL 250 ML</Text>
              <View style={{ height: 6 }} />
              <Text style={{ fontSize: 12 }}>30 : 20</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f2f2' },
  headerRow: { padding: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  headerTitle: { fontWeight: '700', fontSize: 18 },
  roundIcon: { width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', elevation: 2 },
  mapPlaceholder: { height: 240, margin: 16, borderRadius: 12, backgroundColor: '#2b6cb0', justifyContent: 'center', alignItems: 'center' },
  cardFloat: { position: 'absolute', left: 16, right: 16, top: 200, backgroundColor: '#fff', padding: 14, borderRadius: 14, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', elevation: 6 },
  smallCar: { width: 48, height: 48, borderRadius: 10, backgroundColor: '#111827', justifyContent: 'center', alignItems: 'center' },
  cardTitle: { fontWeight: '700' },
  cardSubtitle: { opacity: 0.7, fontSize: 12 },
  primaryBtn: { backgroundColor: '#ffd43b', paddingVertical: 10, paddingHorizontal: 14, borderRadius: 10 },
  sectionTitle: { fontWeight: '700', marginBottom: 8 },
  chargerCard: { width: 120, height: 90, borderRadius: 12, backgroundColor: '#fff', marginRight: 12, padding: 10, elevation: 3 },
});