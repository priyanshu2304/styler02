import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FancyCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElivated]}>
        <Image
          style={styles.cardImage}
          source={{
            uri: 'https://www.shutterstock.com/search/everyday-objects',
          }}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Hawa Mahal</Text>
          <Text style={styles.cardLabel}>Pink City,Jaipur</Text>
          <Text style={styles.cardDescription}>
            fbhfhewdfw fwef ewf wefewf ewf ewf ewf ewf ewf
          </Text>
          <Text style={styles.cardFooter}>12 mins Away</Text>
        </View>
      </View>
    </View>
  );
};

export default FancyCards;

const styles = StyleSheet.create({
  headingText: {padding: 8},
  card: {},
  cardElivated: {},
  cardImage: {
    height: 180,
    backgroundColor: 'red',
  },
  cardBody: {},
  cardTitle: {},
  cardLabel: {},
  cardDescription: {},
  cardFooter: {},
});
