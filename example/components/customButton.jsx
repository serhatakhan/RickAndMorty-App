import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CustomButton = (props) => {
    // propsun altından title'ı ve color'u al
    const {title, color} = props

    return (
        <TouchableOpacity {...props} style={{backgroundColor: color, padding: 10, margin:10, borderRadius:8, justifyContent: "center", alignItems: "center"}}>
            <Text style={{fontSize:18, color: "white", fontWeight: "500"}}>{title}</Text>
        </TouchableOpacity>
    );
};

export default CustomButton;
