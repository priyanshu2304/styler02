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
  headingText: {padding: 8, fontSize: 24, fontWeight: 'bold'},
  card: {width: 350, height: 360, borderRadius: 6, marginHorizontal: 16},
  cardElivated: {
    backgroundColor: '#7878784d',
    elevation: 10,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowColor: '#7878784d',
  },
  cardImage: {
    height: 180,
    backgroundColor: 'red',
    marginBottom: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardBody: {flex: 1, flexGrow: 1, paddingHorizontal: 12},
  cardTitle: {fontSize: 22, fontWeight: 'bold', marginBottom: 6},
  cardLabel: {fontSize: 18, fontWeight: 'bold', marginBottom: 6},
  cardDescription: {fontSize: 14, marginBottom: 12},
  cardFooter: {},
});
