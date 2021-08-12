import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import TasksTile from './TasksTile';


/* FlatList est une interface performante pour le rendu de listes simples et plates,
 prenant en charge les fonctionnalités les plus pratiques comme Pull to Refresh,
Scroll loading.
https://reactnative.dev/docs/flatlist*/


const TasksList = ({ tasks, onChangeStatus, onDeleteTask }) => {
    //Function qui prend pour paramètre la valeur initiale de task
    const _renderItem = ({ item }) => (
        <TasksTile
            id={item.id}
            title={item.title}
            completed={item.completed}
            onChangeStatus={onChangeStatus}
            onDeleteTask={onDeleteTask}


        ></TasksTile>
    );

    return (
        <FlatList
            data={tasks}
            renderItem={_renderItem}
            keyExtractor={item => item.id}
        />
    )

}

const styles = StyleSheet.create({
    container: {

    }
})

export default TasksList