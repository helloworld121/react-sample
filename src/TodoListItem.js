const TodoListItem = ({todo, toggleState}) => {
    return (
        <div>
            {todo.title}
            <input type="checkbox" checked={todo.done} onChange={() => toggleState(todo)}/>
        </div>
    );
};

export default TodoListItem;
