import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../../theme/colors';

const CustomButton = (props) => {
    const {backColor, title} = props

    return (
        // * [] kullanarak hem aşağıdaki stilleri alsın hem de componenti çağırdığımız yerden
        // stil yollarsak onu alsın. 
        <TouchableOpacity {...props} style={[styles.container, {backgroundColor: backColor}]}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.DETAIL2,
        padding: 8,
        borderRadius: 5,
        margin: 5
    },
    title: {
        fontSize: 18,
        color: Colors.DARK
    }
});

export default CustomButton;
