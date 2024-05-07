import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../theme/colors';

const EpisodeCard = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={{fontSize: 21, fontWeight: 600, color: Colors.DARK}}>
          {item.episode}
        </Text>
        <Text style={{fontSize: 17, fontWeight: 600, color: Colors.DARK}}>
          {item.name}
        </Text>
        <Text style={{fontSize: 15, color: Colors.DETAIL}}>
          Aired on {item.air_date}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    borderWidth: 2,
    borderColor: Colors.DETAIL2,
    gap: 8,
    borderRadius: 10,
    margin: 5,
    padding: 10,
  },
});

export default EpisodeCard;
