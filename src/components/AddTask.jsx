import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const AddTask = ({ taskToEdit, onSaveTask }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        if (taskToEdit) {
            setTitle(taskToEdit.title);
            setDescription(taskToEdit.description);
        } else {
            setTitle("");
            setDescription("");
        }
    }, [taskToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSaveTask({ title, description });
    };

    return (
        <section>
            <h1>NOTITAS :)</h1>
            <h1>{taskToEdit ? "Editar Tarea" : "Agregar Tarea"}</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Título"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Descripción"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <button type="submit">{taskToEdit ? "Guardar Cambios" : "Agregar"}</button>
            </form>
        </section>
    );
};

AddTask.propTypes = {
    taskToEdit: PropTypes.object,
    onSaveTask: PropTypes.func.isRequired,
};

export default AddTask;
