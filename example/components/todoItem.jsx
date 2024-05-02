import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from './customButton';
import { useDispatch } from 'react-redux';
import { removeItem } from '../store/actions/todoActions';

const TodoItem = ({item}) => {
    // console.log(item);
    const dispatch = useDispatch()

    return (
        <View style={styles.container}>
            <View style={{flex:2}}>
                <Text style={{fontSize: 18, fontWeight: "500"}}>{item.todoTitle}</Text>
            </View>
            <View style={{flex:1}}>
                <CustomButton title="Delete" color="orangered" onPress={()=> dispatch(removeItem(item))} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 15,
        borderBottomWidth: 0.8,
        borderBottomColor: "#bbb",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
});

export default TodoItem;
