import React from 'react'
import { View, StyleSheet } from 'react-native'

import Counter from '../_Shared/Counter'

const CounterContainer = ({ nbTasks, nbTaskscompleted }) => {
    return (
        <View style={styles.container}>
            <Counter nb={nbTasks} title={'Tâches crées'} />
            <Counter nb={nbTaskscompleted()} title={'Tâches Terminées'} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginBottom: 30,
        marginTop: 20

    }
})

export default CounterContainer