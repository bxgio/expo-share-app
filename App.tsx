import React from 'react';
import { View, TouchableOpacity, Text, Share } from 'react-native';
// run in REACT NATIVE CLI
export default function App() {
  const shareContent = async () => {
    try {
      await Share.share({
        message: 'Check out this awesome content!',
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={shareContent} style={{ backgroundColor: 'blue', padding: 16 }}>
        <Text style={{ color: 'white', fontSize: 18 }}>Share</Text>
      </TouchableOpacity>
    </View>
  );
}
