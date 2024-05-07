import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import {screenStyle} from '../../styles/screensStyle';
import {useDispatch, useSelector} from 'react-redux';
import {getEpisodeList} from '../../store/actions/episodeActions';
import Spinner from '../../components/ui/spinner';
import EpisodeCard from '../../components/episodes/episodeCard';
import Colors from '../../theme/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Episodes = () => {
  const {episodeList, pending} = useSelector(state => state.episode);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEpisodeList());
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.BGCOLOR}}>
      <View style={screenStyle.container}>
        <View style={{flexDirection: "row", alignItems: "center", gap:8, marginBottom:5}}>
          <Text style={{fontSize: 30, fontWeight: 'bold', paddingLeft:6, color: Colors.DARK}}>Episodes</Text>
          <Icon name="movie-open-play" size={26} color={Colors.DARK} />
        </View>

        {pending ? (
          <Spinner />
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={episodeList}
            renderItem={({item}) => <EpisodeCard item={item} key={item.id} />}
            // ListFooterComponent={<Spinner />}
            // onEndReachedThreshold={0.3}
            // onEndReached={handleLoadMore}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Episodes;
