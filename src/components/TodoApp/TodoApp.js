import React from "react";
import {NewTaskForm} from '../NewTaskForm';
import {TaskList} from "../TaskList";
import {Footer} from "../Footer";
import './TodoApp.css'
const TodoApp = () => {
    const arrTask = [
        {completed: true, editing: false, checked: true, id: 1, text: 'Completed task'},
        {completed: false, editing: true, checked: false, id: 2, text: 'Editing task'},
        {completed: false, editing: false, checked: false, id: 3, text: 'Active task'}
    ]
    return (
        <section className='todoapp'>
            <NewTaskForm/>
            <section className='main'>
                <TaskList  details = {arrTask}/>
                <Footer/>
            </section>
        </section>
    )
}

export {TodoApp}