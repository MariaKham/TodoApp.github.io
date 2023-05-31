import React, { Component } from 'react';

// class Task extends Component {

//     constructor() {
//         super();
//         this.onLabelClick = () => {
//             this.setState({
//                 editing: true,
//             });
//         }

//         this.state = {
//             editing: true,
//             value: '',
//         }
//     }
//     // можно просто функцию без констурктора и без this перед онклик

//     render() {
//         const { editing } = this.state;
//         let classNames = 'new-todo';
//         if (editing) { classNames += 'editing' }
//         const { label, important = false } = this.props;

//         const style = {
//             color: important ? 'tomato' : 'black'
//         };

//         return (
//             <div className="view">
//                 <input
//                     className="toggle"
//                     type="checkbox"
//                 />
//                 <span className={classNames}>
//                     <span
//                         className={"new-todo-label"}

//                         style={style}
//                         onClick={this.onLabelClick}>
//                         {label}
//                     </span>
//                     <button className="icon icon-edit"></button>
//                     <button className="icon icon-destroy"></button>


//                 </span>
//             </div>
//         );
//     }
// }


class Task extends Component {

    constructor(props) {
        super(props);

        this.state = {
            editing: true,
            value: '',
        }
    }
    // можно просто функцию без констурктора и без this перед онклик

    render() {

        return (
            <li className="completed">
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                    />
                    <label>
                        <span className="description">Completed task</span>
                    </label>
                    <button
                        type="button"
                        className="icon icon-edit"
                    />
                    <button type="button" className="icon icon-destroy" />
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