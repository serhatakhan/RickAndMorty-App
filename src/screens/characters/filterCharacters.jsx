import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {screenStyle} from '../../styles/screensStyle';
import CustomButton from '../../components/ui/customButton';
import Colors from '../../theme/colors';
import {genders, status} from '../../utils/constants';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {changeParams} from '../../store/actions/charactersActions';

const FilterCharacters = () => {
  // reduxta state de tuttuğumuz params'a eriş (artık daha sonra bu screen'e geri geldiğimizde önceki filtrelerimizi de görebileceğiz. usestate'de tutsaydık göremezdik)
  const {params} = useSelector((state)=> state.characters)

  const dispatch = useDispatch();
  const navigation = useNavigation();

  // filtreleme fonk
  const filterCharacters = () => {
    // dispatch(getCharacterList(params)); buna da gerek kalmadı. çünkü burada filtrelemleri seçip ana sayfaya yönlendiğimizde oradaki useeffectin bağımlılık dizisine paramsı verdik zaten !!
    // dispatch(getCharacterList(params)); // paramsları alarak aksiyondaki url'e istekte bulun
    navigation.goBack();
  };

    // temizleme fonk (normal karakter getirme isteği atıp önceki sayfaya dönsün)
    const clearFilter = () => {
        dispatch(changeParams({gender: null, status: null}));
        navigation.goBack();
    };

  return (
    <View style={screenStyle.container}>
      <View style={{flex: 1}}>
        <ScrollView>
          <Text
            style={{
              fontSize: 18,
              color: Colors.DARK,
              fontWeight: 'bold',
              marginVertical: 10,
              paddingHorizontal: 3,
            }}>
            Gender
          </Text>
          <View style={{flexDirection: 'row'}}>
            {genders.map(item => (
              <TouchableOpacity
                onPress={() => dispatch(changeParams({gender: item.value}))}
                style={{
                  backgroundColor:
                    params.gender === item.value ? Colors.DETAIL2 : Colors.DARK,
                  padding: 9,
                  margin: 3,
                  borderRadius: 5,
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                key={item.id}>
                <Text
                  style={{
                    color: Colors.WHITE,
                    fontSize: 13,
                  }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <Text
            style={{
              fontSize: 18,
              color: Colors.DARK,
              fontWeight: 'bold',
              marginVertical: 10,
              paddingHorizontal: 3,
            }}>
            Status
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            {status.map(item => (
              <TouchableOpacity
                onPress={() => dispatch(changeParams({status: item.value}))}
                style={{
                  backgroundColor:
                    params.status === item.value ? Colors.DETAIL2 : Colors.DARK,
                  padding: 9,
                  margin: 3,
                  borderRadius: 5,
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                key={item.id}>
                <Text
                  style={{
                    color: Colors.WHITE,
                  }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>

      <View style={{flexDirection: 'row', paddingBottom: 25}}>
        <CustomButton
          onPress={filterCharacters}
          title="Filter"
          backColor={Colors.DETAIL2}
        />
        <CustomButton onPress={clearFilter} title="Clear" backColor={Colors.BGTAB} />
      </View>
    </View>
  );
};

export default FilterCharacters;
