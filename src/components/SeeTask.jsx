import PropTypes from "prop-types";

const SeeTask = ({ listTask, setTaskToEdit }) => {
    const elements = listTask.map((item, index) => (
        <li key={index}>
            <h2>{item.title || "Sin título"}</h2>
            <p>{item.description || "Sin descripción"}</p>
            <button onClick={() => setTaskToEdit(item)}>Editar</button> {/* Agregamos el botón de editar */}
        </li>
    ));

    return (
        <div>
            <h1>Lista de tareas</h1>
            <ul>{elements}</ul>
        </div>
    );
};

SeeTask.propTypes = {
    listTask: PropTypes.array.isRequired,
    setTaskToEdit: PropTypes.func.isRequired, // Aseguramos que se pase la función de editar como prop
};

export default SeeTask;
