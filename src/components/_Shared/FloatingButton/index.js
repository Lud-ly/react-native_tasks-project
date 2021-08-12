import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';



const FloatingButton = ({ toggleForm, isFormOpened }) => {
    return (
        <TouchableOpacity onPress={toggleForm} style={styles.container}>
            {isFormOpened ? <Text style={styles.close}>X</Text> : <Text style={styles.title}>+</Text>}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: 'green',
        justifyContent: 'center'
    },
    title: {
        fontWeight: 'bold',
        color: 'white',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 37
    },
    close: {
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        fontSize: 37,
        backgroundColor: 'rgb(194, 65, 87)',
        borderRadius: 100
    }
})

export default FloatingButton;