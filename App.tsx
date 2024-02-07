import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Flatcards from './components/Flatcards';
import FancyCards from './components/FancyCards';
import ActionCard from './components/ActionCard';
const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Flatcards />
        <FancyCards />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
