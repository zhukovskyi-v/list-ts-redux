import * as React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions';
import {Dispatch} from 'redux';

interface Props {
    dispatch: Dispatch
}

const AddTodo: React.FC<Props> = ({dispatch}) => {
    let input: HTMLInputElement;

    return (
        <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            if (input.value.trim()) {
                dispatch(addTodo(input.value));
                input.value = ''
            }
        }}>
            <div className="row">
                <div className="input-field col s12">
                    <input id="todo-input" type="text" className="validate d-block"
                           ref={(inputElement: HTMLInputElement) => {
                               input = inputElement

                           }}/>
                    <label className='active' htmlFor="todo-input">Write here you todo task</label>
                    <button className="btn waves-effect waves-light btn-small" type="submit">
                        Submit
                        <i className="material-icons right">send</i>
                    </button>
                </div>
            </div>
        </form>
    );
};

export default connect()(AddTodo);