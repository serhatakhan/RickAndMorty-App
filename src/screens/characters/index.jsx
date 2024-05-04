import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {screenStyle} from '../../styles/screensStyle';
import {useDispatch, useSelector} from 'react-redux';
import {changeParams, getCharacterList} from '../../store/actions/charactersActions';
import Spinner from '../../components/ui/spinner';
import CharacterCard from '../../components/characters/characterCard';

const Characters = () => {
  const {characterList, pending, params} = useSelector(state => state.characters);
  // console.log(characterList, pending);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacterList(params));
  }, []);

  const handleLoadMore = () => {
    let changedParams = params.page + 1
    dispatch(changeParams({page: changedParams}))
    console.log(changedParams);
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
          renderItem={({item}) => <CharacterCard item={item} />}
          // listenin sonuna geldiğimizde yeni verilerin geldiğini gösteren spinner ekle
          ListFooterComponent={<Spinner />}
          // onEndReachedThreshold={0.5} -> Kullanıcı listenin yarısına geldiğinde yeni elemanlar yüklensin. 
          // Bu özellik, onEndReached olayının ne zaman tetikleneceğini belirler ve onEndReached olayı, listenin sonuna geldiğinde veya eşik değerine ulaştığında gerçekleşir. 
          onEndReachedThreshold={0.5}
          // Atacağı isteği de onEndReached içine yazdığımız fonk. ile yap. handleLoadMore ismini biz verdik
          onEndReached={handleLoadMore}
        />
      )}
    </View>
  );
};

/* onEndReachedThreshold:
 * Normalde, kullanıcı listenin sonuna yaklaştıkça yeni verileri yüklemek için 
onEndReached olayını kullanırız. Ancak, bu olay her piksel hareketinde tetiklenirse, 
performans sorunlarına neden olabilir. Bu nedenle, onEndReachedThreshold değeri, 
listenin sonuna kaç piksel kala onEndReached olayının tetikleneceğini belirler.

Örneğin, eğer onEndReachedThreshold değeri 0.5 ise, kullanıcı listenin yarısına 
gelmiş demektir ve bu noktada onEndReached olayı tetiklenecektir. 
Yani, eşik değeri 0 ile 1 arasında bir sayı olmalıdır ve bu sayı, yüzde cinsinden 
listenin sonuna ne kadar yaklaşıldığını belirtir.
*/

export default Characters;
