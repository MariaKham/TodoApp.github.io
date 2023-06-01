const NewTaskForm = () => {
    return (
        <form className="header">
            <h1>Todos</h1>
            <label>
                <input
                    className="new-todo"
                    placeholder="What needs to be done?"
                />
            </label>
        </form>
    );
};

export default NewTaskForm;