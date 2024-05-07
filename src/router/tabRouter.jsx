import * as React from 'react';
import {Dimensions, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Characters from '../screens/characters';
import Episodes from '../screens/episodes';
import Locations from '../screens/locations';
import Settings from '../screens/settings';
import {tabBarStyle} from '../styles/tabBarStyle';
import {CHARACTER, EPISODES, LOCATIONS, SETTINGS} from '../utils/routes';
import TabIcon from '../components/router/tabIcon';
import Colors from '../theme/colors';

const {width, height} = Dimensions.get('window');

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerStyle: tabBarStyle.headerStyle,
        headerShadowVisible: tabBarStyle.headerShadowVisible,
        tabBarStyle: tabBarStyle.tabBarStyle,
        tabBarActiveTintColor: tabBarStyle.tabBarActiveTintColor,
        tabBarInactiveTintColor: tabBarStyle.tabBarInactiveTintColor,
        // * screenOptions'un parametresindeki route bize screen isimlerini veriyor.
        // route içinde name var. bu isimleri prop olarak verdik. aşağıdaki screen isimleri yani !
        tabBarIcon: ({focused, color, size}) => (
          <TabIcon screenName={route.name} color={color} focused={focused} size={size} />
        ), // tabBarIcon fonk. döndürüyor !
      })}>
      <Tab.Screen
        name={CHARACTER}
        component={Characters}
        options={{
          headerTitle: () => (
            <Image
              source={require('../assets/rickmorty.png')}
              style={{height: width * 0.9, width: width * 0.9}}
              resizeMode="contain"
            />
          ),
          headerTitleAlign: 'center',
          headerStyle: {
            height: 180,
            backgroundColor: Colors.BGCOLOR,
          },
        }}
      />
      <Tab.Screen name={EPISODES} component={Episodes} options={{headerShown: false}} />
      <Tab.Screen name={LOCATIONS} component={Locations} />
      <Tab.Screen name={SETTINGS} component={Settings} />
    </Tab.Navigator>
  );
}
