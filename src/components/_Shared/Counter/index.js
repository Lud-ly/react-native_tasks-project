import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Counter = ({ nb, title }) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.nb}>{nb}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    nb: {
        fontWeight: 'bold',
        fontSize: 18
    },
    title: {
        color: 'black',
        fontSize: 18
    }
})

export default Counter