import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { screenStyle } from '../../styles/screensStyle';

const Settings = () => {
    return (
        <View style={screenStyle.container}>
            <Text style={{alignSelf: "center", fontSize: 16}}>Sounds:  On/Off</Text>
            <Text style={{alignSelf: "center", marginVertical: 10, fontSize: 16}}>Dark Mode:  coming soon...</Text>
        </View>
    );
};

export default Settings;
