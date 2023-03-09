import React, {Component} from "react";
import {NewTaskForm} from '../NewTaskForm';
import {TaskList} from "../TaskList";
import {Footer} from "../Footer";
import './TodoApp.css'

 class TodoApp extends Component {
    id = 0
     constructor(props) {
         super(props);
         this.state = {
             arrTask : [

             ],
             filterTask : [],
         }
         this.state.filterTask = this.state.arrTask
     }

     onLabel = (id) => {
         this.setState(({arrTask}) => {
             const idx = arrTask.findIndex((el) => el.id === id)
             const oldItem = arrTask[idx];
             const newItem = {...oldItem, completed: !oldItem.completed}
             const newArr = [
                 ...this.state.arrTask.slice(0,idx),
                 newItem,
                 ...this.state.arrTask.slice(idx+1)
             ]
             return {
                  arrTask: newArr,
                 filterTask: newArr
             }
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
                 arrTask: newArr,
                 filterTask: newArr
             }
         })
        this.id--
     }

     onCreate = (text) => {
         return {
             completed: false,
             checked: false,
             editing: false,
             id: ++this.id,
             text: text,
         }
     }

     onAdd =  (text) => {
         const newItem =  this.onCreate(text);
         this.setState(({arrTask}) => {
             const newArr = [
                 ...arrTask,
                 newItem
             ]

             return {
                 arrTask: newArr,
                 filterTask: newArr
             }
         })
     }

     onClearCompleted = () => {
        this.setState(({arrTask}) => {
            const arr = arrTask.filter((el) => !el.completed)
            return {
                arrTask: arr,
                filterTask: arr
            }

        })
     }

     filterActive = () => {
        this.setState(({arrTask, filterTask}) => {
            filterTask = arrTask
            const newArr = filterTask.filter((el) => !el.completed)
            return {
                filterTask: newArr
            }
        })
     }

    fillerAll = () => {
        this.setState(({arrTask}) => {
            return {
                filterTask: arrTask
            }
        })
    }
    filterCompleted = () => {
        this.setState(({arrTask, filterTask}) => {
            filterTask = arrTask
            const newArr = filterTask.filter((el) => el.completed)
            return {
                filterTask: newArr
            }
        })
    }

    onEdit = (id) => {
        this.setState(({arrTask}) => {
            const idx = arrTask.findIndex((el) => el.id === id)
            const oldItem = arrTask[idx];
            const newItem = {...oldItem, editing: true}
            const newArr = [
                ...this.state.arrTask.slice(0,idx),
                newItem,
                ...this.state.arrTask.slice(idx+1)
            ]
            return {
                arrTask: newArr,
                filterTask: newArr
            }
        })
    }

    onChangeEdit = ( id , text) => {
        this.setState(({arrTask}) => {
            const idx = arrTask.findIndex((el) => el.id === id)
            const oldItem = arrTask[idx];
            const newItem = {...oldItem, editing: false, text: text}
            const newArr = [
                ...this.state.arrTask.slice(0,idx),
                newItem,
                ...this.state.arrTask.slice(idx+1)
            ]
            return {
                arrTask: newArr,
                filterTask: newArr
            }
        })
    }

    render () {
        const unfinishedCount = this.state.arrTask.filter((el) => !el.completed).length
        const {filterTask} = this.state
        return (
            <section className='todoapp'>
                <NewTaskForm onAdd = {this.onAdd}/>
                <section className='main'>
                    <TaskList filterTask ={filterTask}
                              onLabel = {this.onLabel}
                              onDelete = {this.onDelete}
                              onEdit = {this.onEdit}
                              onChangeEdit = {this.onChangeEdit}/>
                    <Footer count = {unfinishedCount}
                            onClearCompleted={this.onClearCompleted}
                            filterActive = {this.filterActive}
                            filterAll = {this.fillerAll}
                            filterCompleted = {this.filterCompleted} />
                </section>
            </section>
        )
    }
}

export {TodoApp}
