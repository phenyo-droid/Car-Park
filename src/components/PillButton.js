import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function PillButton({ label, onPress, style }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.pillButton, style]}>
      <Text style={styles.pillButtonText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  pillButton: {
    marginTop: 18,
    backgroundColor: '#ffd43b',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 12,
  },
  pillButtonText: {
    fontWeight: '700',
  },
});
