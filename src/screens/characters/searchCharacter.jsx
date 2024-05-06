import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {screenStyle} from '../../styles/screensStyle';
import {useDispatch, useSelector} from 'react-redux';
import {
  changeParams,
  getCharacterList,
} from '../../store/actions/charactersActions';
import Spinner from '../../components/ui/spinner';
import SearchItem from '../../components/characters/searchItem';

const SearchCharacters = () => {
  const {characterList, pending, params} = useSelector(state => state.characters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacterList(params));
  }, [params]); // params verisi değiştiğinde tekrar istek at !

  const ListHeaderComponent = () => {
    return (
        <View><Text>Search</Text></View>
    )
  }

  return (
    <View style={screenStyle.container}>
      {/* pending true ise spinner bas */}
      {pending ? (
        <Spinner />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={characterList}
          renderItem={({item}) => <SearchItem item={item} key={item.id} />}
          ListHeaderComponent={ListHeaderComponent}
          // ListFooterComponent={<Spinner />}
          // onEndReachedThreshold={0.3}
          // onEndReached={handleLoadMore}
        />
      )}
    </View>
  );
};

export default SearchCharacters;
