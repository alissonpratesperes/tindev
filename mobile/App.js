import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

  export default function App() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Hello OmniStack 8! </Text>
      </View>
    );
  }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7159C1'
      },
      text: {
        fontWeight: 'bold',
        color: '#FFFFFF',
        fontSize: 20
      }
    });

