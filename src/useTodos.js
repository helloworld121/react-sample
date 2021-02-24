import {useEffect, useState} from "react";

const data = [
    {id: 1, title: 'get up', done: true},
    {id: 2, title: 'eat', done: true},
    {id: 3, title: 'play', done: false},
];

export default function useTodos() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        // if you do a state-change in a timeout the component gets re-rendered
        // and the effect will be reexecuted => which will trigger a new state-change
        // => to prevent this, we need to add an empty array at the end
        setTimeout(() => {
            setTodos(data);
        }, 1000);
    }, []);


    function handleSave(todo) {
        const myBrandNewTodo = {
            ...todo,
            id: Math.max(...todos.map(t => t.id)) + 1,
        }
        // to make sure the state we change is the current one => and it wasn't change in between
        setTodos((prevState) => [...prevState, myBrandNewTodo]);
    }

    function toggleState(todo) {
        // console.log('toggleState');
        setTodos((prevState) => prevState.map(t => {
            if(t.id === todo.id ) {
                // t.done = !t.done;
                t = {...t, done: !t.done}
            }
            return t;
        }));
    }


    return {todos, handleSave, toggleState};

}

