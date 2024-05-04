import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Colors from '../../theme/colors';
import GenderIcon from './genderIcon';
import {useNavigation} from '@react-navigation/native';
import {CHARACTERDETAILS} from '../../utils/routes';

const CharacterCard = ({item}) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.container}
      //item'ın içindeki id'yi, characterID adıyla gönder
      onPress={() => navigation.navigate(CHARACTERDETAILS, {characterID: item.id})}>
      <View style={styles.imageContainer}>
        <Image source={{uri: item.image}} style={styles.image} />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.species}>{item.species}</Text>
        <View style={styles.statusContainer}>
          <View>
            <Text style={styles.status}>{item.status}</Text>
          </View>
          <View style={styles.genderContainer}>
            <GenderIcon size={22} gender={item.gender} />
            <Text style={styles.gender}>{item.gender}</Text>
          </View>
        </View>
      </View>

      <View style={styles.iconContainer}>
        <Icon name="arrow-right" size={24} color={Colors.BGTAB} />
      </View>
    </Pressable>
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
    justifyContent: 'space-around',
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.DARK
  },
  species: {
    fontSize: 16,
    color: 'gray',
    fontWeight: '400',
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 5,
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  image: {
    width: 120,
    height: 130,
    borderRadius: 10,
  },
  status: {
    fontSize: 16,
    color: 'gray',
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  gender: {
    fontSize: 16,
    color: 'gray',
    fontWeight: '500',
  },
  genderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
});

export default CharacterCard;
