import {useState, useEffect} from 'react';

const data = [
    {id: 1, title: 'get up', done: true},
    {id: 2, title: 'eat', done: true},
    {id: 3, title: 'play', done: false},
];

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setTodos(data);
        }, 1000);
    });

    return (
        <div>
            {todos.map((todo) => {
                return <div key={todo.id}>{todo.title}</div>
            }) }
        </div>
    );

};

export default TodoList;
