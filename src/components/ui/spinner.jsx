import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import Colors from '../../theme/colors';

const Spinner = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={"large"} color={Colors.DARK} />
            <Text style={styles.text}>Loading...</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        fontSize: 18,
        fontWeight: "600",
        marginTop: 10,
        color: Colors.DARK
    }
});

export default Spinner;
