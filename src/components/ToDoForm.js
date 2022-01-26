import React, {useState} from 'react';

function ToDoForm (props) {

    const [input, setInput] = useState(props.edit ? props.edit.value: '');
    
    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })
        setInput(input);
    }

    const handleChange = (e) => {
        setInput(e.target.value);
        console.log(e.target.value);
    }

    return (
            <form className="toDo-Form" onSubmit={handleSubmit}>

                {props.edit ? (
                    <>
                    <input onChange={handleChange} type="text" placeholder="Update your item" name="text" value={input} className="toDo-input edit"/>
                    <button className="toDo-button edit">Update</button>
                    </>  ) : (
                   <>
                <input onChange={handleChange} type="text" placeholder="Add a new task" name="text" value={input} className="toDo-input" />
                <button className="toDo-button">Add</button>
                   </>  )}
            </form>

)

}

export default ToDoForm;