import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {screenStyle} from '../../styles/screensStyle';
import {useDispatch, useSelector} from 'react-redux';
import {getCharacterList} from '../../store/actions/charactersActions';
import Spinner from '../../components/ui/spinner';
import CharacterCard from '../../components/characters/characterCard';

const Characters = () => {
  const {characterList, pending} = useSelector(state => state.characters);
  // console.log(characterList, pending);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacterList());
  }, []);

  return (
    <View style={screenStyle.container}>
      {/* pending true ise spinner bas */}
      {pending ? (
        <Spinner />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={characterList}
          renderItem={({item}) => <CharacterCard item={item} />}
        />
      )}
    </View>
  );
};

export default Characters;
