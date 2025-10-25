import React from 'react';
import { Alert, Button, StyleSheet, View } from 'react-native';

export default function psc() {
    const showAlert = () => {
        Alert.alert(
          "Hello!",
          "This is a simple alert(IOS).",
          [
            { text: "OK" }
          ]
        );
      };
    
      return (
        <View style={{ marginTop: 50 }}>
          <Button title="Show Alert" onPress={showAlert} />
        </View>
      );
}

const styles = StyleSheet.create({})