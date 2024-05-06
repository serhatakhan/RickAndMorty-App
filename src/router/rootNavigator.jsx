import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './tabRouter';
import {
  CHARACTERDETAILS,
  FILTERCHARACTER,
  SEARCHCHARACTER,
  TABNAVIGATOR,
} from '../utils/routes';
import CharacterDetail from '../screens/characters/characterDetail';
import Colors from '../theme/colors';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FilterCharacters from '../screens/characters/filterCharacters';
import SearchCharacter from '../screens/characters/searchCharacter';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={TABNAVIGATOR}
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={CHARACTERDETAILS}
        component={CharacterDetail}
        options={{
          headerBackTitleVisible: false,
          headerShadowVisible: false,
          headerStyle: {backgroundColor: Colors.BGCOLOR},
          headerTitle: '', //ortadaki başlık yazısını kaldır
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="arrow-left-long" size={26} color={Colors.DARK} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name={FILTERCHARACTER}
        component={FilterCharacters}
        options={{
          headerBackTitleVisible: false,
          headerShadowVisible: false,
          headerStyle: {backgroundColor: Colors.BGCOLOR},
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="arrow-left-long" size={26} color={Colors.DARK} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name={SEARCHCHARACTER}
        component={SearchCharacter}
        options={{
          headerBackTitleVisible: false,
          headerShadowVisible: false,
          headerStyle: {backgroundColor: Colors.BGCOLOR},
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="arrow-left-long" size={26} color={Colors.DARK} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default RootNavigator;
