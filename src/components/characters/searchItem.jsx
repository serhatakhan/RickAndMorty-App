import React, {Component} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../theme/colors';
import {CHARACTERDETAILS} from '../../utils/routes';

const SearchItem = ({item}) => {
  const navigation = useNavigation();

  return (
    <Pressable
      // item altındaki id'yi de characterID adıyla gönder
      onPress={() => navigation.navigate(CHARACTERDETAILS, {characterID: item.id})}
      style={styles.container}>
      <Text style={styles.name}>{item.name}</Text>
      <Icon name="arrow-forward-ios" size={25} color={Colors.BGTAB} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 12,
    marginHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.BGTAB
  },
  name: {
    fontSize: 18,
  },
});

export default SearchItem;
