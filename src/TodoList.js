import {useState, useEffect} from 'react';

const data = [
    {id: 1, title: 'get up', done: true},
    {id: 2, title: 'eat', done: true},
    {id: 3, title: 'play', done: false},
];

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        // if you do a state-change in a timeout the component gets re-rendered
        // and the effect will be reexecuted => which will trigger a new state-change
        // => to prevent this, we need to add an empty array at the end
        setTimeout(() => {
            setTodos(data);
        }, 1000);
    }, []);


    const [newTodo, setNewTodo] = useState('');

    return (
        <div>
            <h3>Neue Todo:</h3>
            {/* there is no automatically two-way-databinding */}
            <input type="text" value={newTodo} onChange={(event => {
                const value = event.currentTarget.value;
                setNewTodo(value);
            })}/>
            <button onClick={() => {
                const myBrandNewTodo = {
                    // id: Math.max.apply(todos.map(t => t.id)) + 1,
                    id: Math.max(...todos.map(t => t.id)) + 1,
                    title: newTodo,
                    done: false,
                }
                setTodos([...todos, myBrandNewTodo]);
                setNewTodo('');
            }}>Ok</button>

            {todos.map((todo) => {
                return <div key={todo.id}>{todo.title}</div>
            }) }
        </div>
    );

};

export default TodoList;
