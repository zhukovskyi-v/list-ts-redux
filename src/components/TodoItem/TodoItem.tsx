import * as React from 'react';
import './todo-item.css';

interface Props {
    text: string;
    deleteTodo: () => void;
    toggleVisibility: () => void;
    completed: boolean
}

export const TodoItem: React.FC<Props> = ({text, deleteTodo, toggleVisibility, completed}) => {
    let textClassesNames = completed ? 'todo-item-text-completed' : 'todo-item-text'

    return (
        <li className='todo-item'>
            <p className={textClassesNames}>{text}</p>
            <div>
                <button className='todo-item-btn' onClick={toggleVisibility}>
                    <i className="small material-icons">done</i>
                </button>
                <button className='todo-item-btn' onClick={deleteTodo}>
                    <i className="small material-icons">delete_forever</i>
                </button>
            </div>
        </li>
    )
};