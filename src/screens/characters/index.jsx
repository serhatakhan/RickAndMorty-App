import React, {useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {screenStyle} from '../../styles/screensStyle';
import {useDispatch, useSelector} from 'react-redux';
import {
  changeParams,
  getCharacterList,
  loadMoreCharacter,
} from '../../store/actions/charactersActions';
import Spinner from '../../components/ui/spinner';
import CharacterCard from '../../components/characters/characterCard';
import HeaderRight from '../../components/router/headerRight';

const Characters = () => {
  const {characterList, pending, params} = useSelector( state => state.characters);
  // console.log(characterList, pending);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacterList(params));
  }, [params]); // params verisi değiştiğinde tekrar istek at !

  const handleLoadMore = () => {
    let changedPage = params.page + 1;
    let newCount = params.count + 20
    dispatch(changeParams({page: changedPage, count: newCount}));
    dispatch(loadMoreCharacter(params));
    // console.log(params);
  };

  return (
    <View style={screenStyle.container}>
      {/* pending true ise spinner bas */}
      {pending ? (
        <Spinner />
      ) : (
        <>
          <HeaderRight />
          <FlatList
            showsVerticalScrollIndicator={false}
            data={characterList}
            renderItem={({item}) => <CharacterCard item={item} key={item.id} />}
            // listenin sonuna geldiğimizde yeni verilerin geldiğini gösteren spinner ekle
            ListFooterComponent={<Spinner />}
            // * onEndReachedThreshold={0.5} -> Kullanıcı listenin yarısına geldiğinde yeni elemanlar yüklensin.
            // Bu özellik, onEndReached olayının ne zaman tetikleneceğini belirler ve onEndReached olayı, listenin sonuna geldiğinde veya eşik değerine ulaştığında gerçekleşir.
            onEndReachedThreshold={0.3}
            // Atacağı isteği de onEndReached içine yazdığımız fonk. ile yap. handleLoadMore ismini biz verdik
            onEndReached={handleLoadMore}
          />
        </>
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
