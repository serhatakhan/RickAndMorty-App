import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TextInput} from 'react-native';
import {screenStyle} from '../../styles/screensStyle';
import {useDispatch, useSelector} from 'react-redux';
import {changeParams, getCharacterList} from '../../store/actions/charactersActions';
import SearchItem from '../../components/characters/searchItem';
import Colors from '../../theme/colors';
import CustomButton from '../../components/ui/customButton';

const SearchCharacters = () => {
  const {characterList, params} = useSelector(state => state.characters);
  const [searchText, setSearchText] = useState("")
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacterList(params));
  }, []);


  const handleSubmit = () => {
    dispatch(changeParams({name: searchText}))
  }

  const ListHeaderComponent = () => {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TextInput
          value={searchText}
          placeholder="search character..."
          returnKeyType="search" // klavye açılınca bu inputun butonu ne olsun
          clearButtonMode="while-editing"
          onSubmitEditing={handleSubmit}
          style={{
            backgroundColor: Colors.WHITE,
            width: '95%',
            height: 42,
            padding: 14,
            borderWidth: 1.5,
            borderRadius: 100,
            borderColor: Colors.BGTAB,
            marginBottom: 5,
          }}
          onChangeText={(text)=> {
            setSearchText(text)
          }}
        />
        {/* <CustomButton onPress={()=> handleSubmit()} title="Search" backColor={Colors.TABICON} /> */}
      </View>
    );
  };

  return (
    <View style={screenStyle.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={characterList}
        renderItem={({item}) => <SearchItem item={item} key={item.id} />}
        ListHeaderComponent={ListHeaderComponent}
      />
    </View>
  );
};

export default SearchCharacters;
