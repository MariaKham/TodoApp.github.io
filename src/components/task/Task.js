import React, { Component } from 'react';


class Task extends Component {


    render() {
        const { onDeleted, id, onToggleComleted, checked, todo } = this.props;

        return (
            <li className={todo.checked ? "completed" : null}>
                <div className="view">

                    <input
                        className="toggle"
                        type="checkbox"
                        onChange={onToggleComleted}
                        id={id}
                        checked={checked}
                    />
                    <label htmlFor={todo.id}>
                        <span className="description">{todo.label}</span>
                    </label>
                    <button
                        type="button"
                        className="icon icon-edit"
                    />
                    <button
                        type="button"
                        className="icon icon-destroy"
                        onClick={onDeleted}
                    />
                </div>

                <form>
                    <input
                        type="text"
                        className="edit"
                    />
                </form>

            </li>
        );
    }
}



export default Task;