import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

//L'utilisateur click sur ajouter, appel de la function callback:
//On récupère la valeur de title de TextInput
//La tâche est ajouter à la liste
//Modification du state, mise à jour du composant TasksList dans TaskContainer
const TasksForm = ({ onAddTask }) => {
    const [title, setTitle] = useState("");

    const _onChangeText = value => {
        setTitle(value);
    };

    const _onPressBtn = () => {
        //On teste si l'input est vide(longeur du string)
        if (title.length > 0) {
            onAddTask(title);
            setTitle("");
        }

    };

    return (
        <View style={styles.container}>
            <View style={styles.containerInput}>
                <TextInput style={styles.title} value={title} onChangeText={_onChangeText} />
            </View>
            <Button
                onPress={_onPressBtn}
                title="Ajouter"
                color="orange"
            />
        </View>

    )

}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        marginBottom: 15
    },
    containerInput: {
        width: '75%',
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 4,
        paddingLeft: 7,

    },
    title: {

    }
})



export default TasksForm