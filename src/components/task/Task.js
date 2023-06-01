import React, { Component } from 'react';


class Task extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            value: '',
            checked: false
        }
    }
    // можно просто функцию без констурктора и без this перед онклик
    onItemClick = () => {
        this.setState(({ checked }) => {
            return { checked: !checked }
        });
    };

    render() {
        const { onDeleted, id } = this.props;
        const { checked } = this.state;



        return (
            <li className={checked ? 'completed' : null}>
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        id={id}
                        onClick={this.onItemClick}

                    />
                    <label>
                        <span className="description">Completed task</span>
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