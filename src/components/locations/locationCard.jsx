import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../theme/colors';

const LocationCard = ({item}) => {
  const originalDate = item.created; // apiden gelen tarihi al değişken at
  const dateObj = new Date(originalDate);
  // Tarihi gün-ay-yıl şeklinde formatla
  const formattedDate = `${dateObj.getDate().toString()}-${(
    dateObj.getMonth() + 1
  ).toString()}-${dateObj.getFullYear()}`;

  return (
    <View style={styles.container}>
      <View style={styles.location}>
        <Text style={{fontWeight: 600, fontSize: 16, color: Colors.DARK}}>Location Name</Text>
        <Text style={{fontWeight: 500, fontSize: 15, color:Colors.DETAIL}}>{item.name}</Text>
      </View>

      <View style={styles.location}>
        <Text style={{fontWeight: 600, fontSize: 16, color: Colors.DARK}}>Dimension</Text>
        <Text
          style={{fontWeight: 500, fontSize: 15, textTransform: 'capitalize', color:Colors.DETAIL2}}>
          {item.dimension}
        </Text>
      </View>

      <View style={styles.location}>
        <Text style={{fontWeight: 600, fontSize: 16, color: Colors.DARK}}>Type</Text>
        <Text style={{fontWeight: 500, fontSize: 15, color:Colors.BGTAB}}>{item.type}</Text>
      </View>

      <View style={styles.location}>
        <Text style={{fontWeight: 600, fontSize: 16, color: Colors.DARK}}>Created</Text>
        <Text style={{fontWeight: 500, fontSize: 15, color:Colors.DETAIL}}>{formattedDate}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    borderWidth: 2,
    borderColor: Colors.BGTAB,
    marginHorizontal: 5,
    marginVertical: 8,
    borderRadius: 6,
  },
  location: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
  },
  name: {
    fontWeight: 600,
    fontSize: 16,
  },
});

export default LocationCard;
