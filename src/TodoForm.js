import {useState} from "react";

const TodoForm = ({onSave}) => {

    const [newTodo, setNewTodo] = useState({
        title: '',
        done: false,
    });

    return (
        <>
            <h3>Neue Todo:</h3>
            {/* there is no automatically two-way-databinding */}
            <input type="text" value={newTodo.title} onChange={(event) => {
                const value = event.currentTarget.value;
                setNewTodo((prevState) => ({...prevState, title: value}));
            }}/>
            <button onClick={() => {
                onSave(newTodo);
                setNewTodo({
                    title: '',
                    done: false,
                });
            }}>Ok</button>
        </>
    );

};

export default TodoForm;

