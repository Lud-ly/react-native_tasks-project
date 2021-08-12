import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native'
import TasksList from './TasksList';
import TasksForm from './TasksForm';
import CountersContainer from './CountersContainer';
import FloatingButton from '../_Shared/FloatingButton';


function TasksContainer(props) {
    //Ajouter ou modifier la liste de tâches

    //Function qui prend pour paramètre la valeur initiale de task
    //Définition d'un id sur chaque tâches, se servir de la date avec l'heure=>
    //Chaque seconde un chiffre nouveau
    const [tasks, setTasks] = useState([
        { id: new Date().getTime(), title: "Sortir les poublles", completed: false },
        { id: 2, title: "Payer le loyer", completed: false },
        { id: 3, title: "Payer les impôt", completed: false },
        { id: 4, title: "Acheter les croquettes pour le chat", completed: false },
        { id: 5, title: "Scéance musculation", completed: false },
        { id: 6, title: "Cours de guitare", completed: false }
    ]);

    const [isFormOpened, setIsFormOpened] = useState(false)

    //Changer le status d'une tâche
    const onChangeStatus = (id) => {
        let newtasks = [];
        //Parcourir le tableau de tâches et la trouver avec l'id
        tasks.forEach(task => {
            //Si même id que l'id en paramètre  dans newtasks
            if (task.id === id) {
                newtasks.push({ id: id, title: task.title, completed: !task.completed })
            }
            else {
                //Si !id ->ajouter tâche
                newtasks.push(task);
            }

        })

        //Changer le status de la tâche
        setTasks(newtasks);
    };
    //Je boucle sur les taches
    //je passe en parametre l'id
    //et j'ajoute la tache dont l'id 
    //et different de id de la liste dans l'array newTasks
    const onDeleteTask = id => {
        let newTasks = [];

        tasks.forEach(task => {
            if (task.id !== id) {
                newTasks.push(task);
            }
        })
        //Changer le status de la tâche
        setTasks(newTasks)
    };


    //Fonction Compteur de tâches réalisées   
    const getTasksCompleted = () => {
        let counter = 0
        //Je boucle sur les taches terminées
        tasks.forEach(task => {
            //Si une tache est réalisée(true)
            if (task.completed) {
                //j'incremente mon compteur de un
                counter++
            }
        });
        return counter
    };
    //Methode Toggle avec un Flag pour afficher le form
    const toggleForm = () => {
        setIsFormOpened(!isFormOpened)
    }


    //Une props est une propriété que l'on passe d'un composant à un autre
    //Une function passée en tant que props est un callback
    //Onclick TasksForm ajouter, apple de la function callback:
    //On récupère la valeur de title de tasksText
    //la tâche est ajouter à la liste
    //Modification du state, mise à jour du composant TasksList
    //React met à jour les différents composants(taskslist)
    //Affichage de la liste modifiée
    const onAddTask = title => {
        const newTask = { id: new Date().getTime(), title: title, completed: false }
        //Spread operator
        // ...Tasks->Methode qui ajoute un array dans un array
        setTasks([newTask, ...tasks]);
    }
    return (
        //Retourne la vue du container
        <View style={styles.container}>
            {isFormOpened && <TasksForm onAddTask={onAddTask} />}
            <CountersContainer nbTasks={tasks.length} nbTaskscompleted={() => getTasksCompleted()} />
            <TasksList tasks={tasks} onChangeStatus={onChangeStatus} onDeleteTask={onDeleteTask} />
            <FloatingButton toggleForm={toggleForm} isFormOpened={isFormOpened} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    }
})

export default TasksContainer;