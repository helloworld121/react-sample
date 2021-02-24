import TodoForm from './TodoForm';
import useTodos from "./useTodos";


const TodoList = () => {

    const {todos, handleSave, toggleState} = useTodos();

    return (
        <div>
            <TodoForm onSave={handleSave}/>

            {todos.map((todo) => {
                // react uses the "key"-prop to save resources
                // => if it rerenderes a component it will check based on the key if an element was changed
                return (
                    <div key={todo.id}>
                        {todo.title}
                        <input type="checkbox" checked={todo.done} onChange={() => toggleState(todo)}/>
                    </div>
                );
            }) }
        </div>
    );

};

export default TodoList;
