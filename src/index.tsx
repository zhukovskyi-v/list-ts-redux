import React from 'react';
import ReactDOM from 'react-dom';
import AddTodo from './container/AddTodo';
import VisibleTodos from './container/VisibleTodos';
import {Provider} from 'react-redux';
import {Filter} from './components/Filter/Filter';
import './index.css';
import {store} from "./store";


const App: React.FC = () => {
    return (
        <div className='app'>
            <h2 className='app-title'>Todo List:</h2>
            <Filter/>
            <AddTodo/>
            <VisibleTodos/>
        </div>
    );
};


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);