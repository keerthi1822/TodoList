import { url } from 'inspector';
import React, { ChangeEvent, useState } from 'react'


import TodoInput from "./TodoInput";
import Todos from "./Todos";



const TodoList: React.FC = () => {
    const [todoList, setTodoList] = useState<ITodo[]>([])
    const [todoItem, setTodoItem] = useState<string>("");

    const onInputchange = (e: ChangeEvent<HTMLInputElement>) => {
        setTodoItem(e.target.value)
    }

    const handleAdd = () => {

        let newTodoObject = [...todoList, { todo: todoItem, completed: false }];
        setTodoList(newTodoObject);
        setTodoItem("");

    }
    const handleEdit = (indexOfEditElement: number) => {
        console.log(indexOfEditElement)



        const newTodoItems = [...todoList];
        const item = newTodoItems[indexOfEditElement];
        let newItem = prompt(`Update ${item.todo}?`, item.todo)!;
        let todoObj = { todo: newItem, completed: false };
        console.log(newItem)
        newTodoItems.splice(indexOfEditElement, 1, todoObj);
        if (newItem === null || newItem === "") {
            return;
        } else {
            item.todo = newItem;
        }
        setTodoList(newTodoItems);
    }
  
    const toggleTodo = (selectedTodo: ITodo) => {

        const newTodos = todoList.map((todo) => {

            if (todo.todo === selectedTodo.todo) {
                return {
                    ...todo,
                    completed: !todo.completed,
                };
            }
            return todo;
        });
        setTodoList(newTodos);
    }
    const handleDelete = (todoTobeDeleted: ITodo) => {
        const newTodos = todoList.filter((todo) => todo.todo !== todoTobeDeleted.todo)
        setTodoList(newTodos);

    }

    return (
        <div>
            <h3>List your  activities of the day.</h3>
            <TodoInput handleAdd={handleAdd} onInputchange={onInputchange} todoItem={todoItem} />
            <Todos todoList={todoList} toggleTodo={toggleTodo} handleEdit={handleEdit} handleDelete={handleDelete} />
        </div>
    )
}

export default TodoList