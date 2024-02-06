import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Flatcards from './components/Flatcards';
const App = () => {
  return (
    <SafeAreaView>
      <Text>
        <Flatcards />
      </Text>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
