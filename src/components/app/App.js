import NewTaskForm from '../newTaskForm/NewTaskForm';
import TaskList from '../taskList/TaskList';
import Footer from '../footer/Footer';
import TaskFilter from '../tasksFilter/TasksFilter';

import './app.css'
import '../../index.css';


const App = () => {

    const todoData = [
        { label: 'drink coffe', important: false, id: 1 },
        { label: 'learn react', important: true, id: 2 },
        { label: 'have a lunch', important: false, id: 3 },
    ];

    return (
        <div className="todoapp">
            <NewTaskForm />
            <TaskList todos={todoData} />
            <Footer />
            <TaskFilter />
        </div>
    );
};

export default App