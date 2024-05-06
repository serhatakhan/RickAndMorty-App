import {useNavigation} from '@react-navigation/native';
import React, {Component} from 'react';
import {View, Pressable} from 'react-native';
import Colors from '../../theme/colors';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/Ionicons';
import {FILTERCHARACTER, SEARCHCHARACTER} from '../../utils/routes';

const HeaderRight = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 9,
        paddingBottom: 6
      }}>
      <Pressable onPress={() => navigation.navigate(SEARCHCHARACTER)}>
        <Icon name="search" size={26} color={Colors.DETAIL2} />
      </Pressable>

      <Pressable onPress={() => navigation.navigate(FILTERCHARACTER)}>
        <Icon2 name="filter" size={26} color={Colors.DETAIL2} />
      </Pressable>
    </View>
  );
};

export default HeaderRight;
