import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Colors from '../../theme/colors';
import GenderIcon from './genderIcon';

const CharacterCard = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: item.image}} style={styles.image} />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.species}>{item.species}</Text>
        <View style={styles.statusContainer}>
          <View>
            <Text style={styles.status} >{item.status}</Text>
          </View>
          <View style={styles.genderContainer}>
            <GenderIcon size={22} gender={item.gender} />
            <Text style={styles.gender} >{item.gender}</Text>
          </View>
        </View>
      </View>

      <View style={styles.iconContainer}>
        <Icon name="arrow-right" size={24} color={Colors.BGTAB} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    margin: 5,
    padding: 7,
  },
  imageContainer: {
    flex: 2,
  },
  infoContainer: {
    flex: 2,
    justifyContent:"space-around",
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
  species: {
    fontSize: 16,
    color: 'gray',
    fontWeight: '400',
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    gap:5
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  image: {
    width: 125,
    height: 145,
    borderRadius: 10,
  },
  status:{
    fontSize: 16,
    color: 'gray',
    fontWeight: '500',
    textTransform: "capitalize"
  },
  gender:{
    fontSize: 16,
    color: 'gray',
    fontWeight: '500',
  },
  genderContainer:{
    flexDirection: "row",
    alignItems: "center",
    gap:2
  }
});

export default CharacterCard;
