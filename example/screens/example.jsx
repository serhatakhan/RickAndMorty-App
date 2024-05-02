import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CustomButton from '../components/customButton';
import { decrementCount, incrementCount, resetCount } from '../store/actions/counterActions';

const Example = () => {
  // store'daki count'a eiş
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              width: 150,
              height: 150,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 100,
              backgroundColor: '#d9d9d9',
            }}>
            <Text style={{fontSize: 50, fontWeight: '600'}}>{count}</Text>
          </View>
        </View>
        <View style={{flex: 1, justifyContent: 'flex-end', padding: 10}}>
          <CustomButton title="Increment" color="blue" onPress={()=> dispatch(incrementCount())} />
          <CustomButton title="Decrement" color="red" onPress={()=> dispatch(decrementCount())} />
          <CustomButton title="Reset" color="orange" onPress={()=> dispatch(resetCount(0))} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Example;
