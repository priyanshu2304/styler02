import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

const Flatcards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Flatcards</Text>
      <ScrollView horizontal>
        <View style={styles.container}>
          <View style={[styles.card, styles.cardOne]}>
            <Text style={styles.textColors}>Red</Text>
          </View>
          <View style={[styles.card, styles.cardTwo]}>
            <Text style={styles.textColors}>Green</Text>
          </View>
          <View style={[styles.card, styles.cardThree]}>
            <Text style={styles.textColors}>Blue</Text>
          </View>
          <View style={[styles.card, styles.cardOne]}>
            <Text style={styles.textColors}>Red</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Flatcards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: '700',
    paddingHorizontal: 8,
  },
  container: {
    flexDirection: 'row',
    gap: 10,
    padding: 8,
  },
  card: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    borderRadius: 4,
  },
  cardOne: {
    backgroundColor: '#ef5354',
  },
  cardTwo: {
    backgroundColor: '#50dbb4',
  },
  cardThree: {
    backgroundColor: '#5da3fa',
  },
  textColors: {
    color: '#fff',
  },
});
