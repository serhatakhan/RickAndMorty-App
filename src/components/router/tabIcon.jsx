import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome5';
import {CHARACTER, EPISODES, LOCATIONS, SETTINGS} from '../../utils/routes';

const TabIcon = ({screenName, color, focused, size}) => {
  //   console.log(screenName); --> bottom tabsa verdiğimiz isimleri prop olarak aldık

  if (screenName === CHARACTER)
    return <Icon name="people-pulling" size={size} color={color} />;
  if (screenName === EPISODES)
    return <Icon2 name="movie-open" size={size} color={color} />;
  if (screenName === LOCATIONS)
    return <Icon3 name="space-shuttle" size={size} color={color} />;
  if (screenName === SETTINGS)
    return <Icon name="spaghetti-monster-flying" size={size} color={color} />;
};

export default TabIcon;
