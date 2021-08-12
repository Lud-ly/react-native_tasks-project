import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';


const TasksTile = ({ id, title, completed, onChangeStatus, onDeleteTask }) => {
    //Composant TasksTile cliquable avec TouchableOpacity
    //Quand l'utilisateur click sur la tache on change le status de true a false ou l'inverse
    return (
        <TouchableOpacity onChangeStatus={onChangeStatus}
            onPress={() => onChangeStatus(id)}
        >
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <Image
                        style={styles.icon}
                        source={completed ? require('../../../assets/task_alt.png') : require('../../../assets/outline_circle.png')}
                    />
                    <Text style={[styles.title, { color: completed ? 'lightgrey' : '#000' }]}>{title}</Text>
                </View>
                <TouchableOpacity onPress={() => onDeleteTask(id)}>
                    <Image
                        style={styles.icon}
                        source={require('../../../assets/delete.png')}
                    />
                </TouchableOpacity>

            </View>
        </TouchableOpacity>

    )

}

const styles = StyleSheet.create({
    icon: {
        height: 30,
        width: 30
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30
    },
    subContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        marginLeft: 10,
        fontWeight: 'bold'
    }
})



export default TasksTile