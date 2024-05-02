import {StyleSheet} from 'react-native';
import Colors from '../theme/colors';

const tabBarStyle = StyleSheet.create({
  headerStyle: {
    backgroundColor: Colors.BGCOLOR,
  },
  headerShadowVisible: false,
  tabBarStyle: {
    backgroundColor: Colors.BGTAB,
    height:85
  },
  tabBarActiveTintColor: Colors.TABICON,
  tabBarInactiveTintColor: Colors.BGCOLOR,
});

export {tabBarStyle};
