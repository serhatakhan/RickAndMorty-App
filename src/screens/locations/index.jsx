import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {screenStyle} from '../../styles/screensStyle';
import {useDispatch, useSelector} from 'react-redux';
import {getLocationList} from '../../store/actions/locationsActions';
import Spinner from '../../components/ui/spinner';
import LocationCard from '../../components/locations/locationCard';

const Locations = () => {
  const {locationList, pending} = useSelector(state => state.location);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLocationList());
  }, []);

  return (
    <View style={screenStyle.container}>
      {pending ? (
        <Spinner />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={locationList}
          renderItem={({item}) => <LocationCard item={item} key={item.id} />}
          // ListFooterComponent={<Spinner />}
          // onEndReachedThreshold={0.3}
          // onEndReached={handleLoadMore}
        />
      )}
    </View>
  );
};

export default Locations;
