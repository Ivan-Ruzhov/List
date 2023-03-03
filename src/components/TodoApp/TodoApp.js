import React, {Component} from "react";
import {NewTaskForm} from '../NewTaskForm';
import {TaskList} from "../TaskList";
import {Footer} from "../Footer";
import './TodoApp.css'

 class TodoApp extends Component {
     state = {
         arrTask : [
             {completed: false, checked: false, editing: false,  id: 1, text: 'Completed task'},
             {completed: false, checked: false, editing: false,  id: 2, text: 'Editing task'},
             {completed: false, checked: false, editing: false,  id: 3, text: 'Active task'}
         ],
     }
     onLabel = (id) => {
         this.setState(({arrTask}) => {
         const arr = arrTask.slice(0)
         const idx = arr.findIndex((el) => el.id === id)
         arr[idx].completed = !arr[idx].completed
         arr[idx].checked = !arr[idx].checked

             return {
                 arrTask : arr
             };
         })
     }
     onDelete = (id) => {
         this.setState(({arrTask}) => {
             const idx = arrTask.findIndex((el) => el.id === id)
             const newArr = [
                 ...this.state.arrTask.slice(0,idx),
                 ...this.state.arrTask.slice(idx+1)
             ]
             return {
                 arrTask: newArr
             }
         })

     }
    render () {
        const {arrTask} = this.state
        return (
            <section className='todoapp'>
                <NewTaskForm/>
                <section className='main'>
                    <TaskList arrTask = {arrTask} onLabel = {this.onLabel} onDelete = {this.onDelete}/>
                    <Footer/>
                </section>
            </section>
        )
    }
}

export {TodoApp}
