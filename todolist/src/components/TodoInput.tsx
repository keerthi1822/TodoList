import React ,{ChangeEvent, DetailedReactHTMLElement, useState} from 'react';
import "./TodoInput.css";

type props = {
    handleAdd: ()=>void; 
    onInputchange: (e:React.ChangeEvent<HTMLInputElement>) => void; 
    todoItem:string
}

const TodoInput = ({handleAdd,onInputchange,todoItem}:props) => {

    return (
        <div className='input-form'>
            <div>
              
                    <input
                        name="lname"
                        type="text"
                        value={todoItem}
                        onChange={onInputchange}
                    />
               
            </div>

            <div>
                <button disabled={!todoItem} onClick={handleAdd} className='btn-add'>ADD</button>
            </div>
        </div>
    )
}

export default TodoInput