import React from 'react';

const defaultFormData = {
    userId: 1,
    id: null,
    title: "",
    completed: false
};

export default function CreateTodoForm (props) {
    const [formData, setFormData] = React.useState(defaultFormData)

    const handleSubmit =  (event) => {
        event.preventDefault();
        props.createTodo(formData);
        setFormData(defaultFormData)
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    onChange={(event) => setFormData(
                        {
                            ...formData,
                            title: event.target.value,
                        }
                    )}
                    value={formData.title}
                />
                <button type='submit'>Create new Todo</button>
            </form>
        </div>
    )
}