import TodoForm from './TodoForm';
import useTodos from "./useTodos";
import TodoListItem from "./TodoListItem";


const TodoList = () => {

    const {todos, handleSave, toggleState} = useTodos();

    return (
        <div>
            <TodoForm onSave={handleSave}/>

            {todos.map((todo) => {
                // react uses the "key"-prop to save resources
                // => if it rerenderes a component it will check based on the key if an element was changed
                return (
                    <TodoListItem todo={todo} toggleState={toggleState} key={todo.id}/>
                );
            }) }
        </div>
    );

};

export default TodoList;
