import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import { genderTypes } from '../../utils/constants';
import Colors from '../../theme/colors';

const GenderIcon = ({gender, size}) => {
  if (gender === genderTypes.MALE)
    return <Icon name="male" size={size} color={Colors.BGTAB} />;
  if (gender === genderTypes.FEMALE)
    return <Icon name="female" size={size} color={Colors.BGTAB} />;
  if (gender === genderTypes.UNKNOWN)
    return <Icon2 name="questioncircleo" size={size} color={Colors.BGTAB} />;
};

export default GenderIcon;
