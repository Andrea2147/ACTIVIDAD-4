import { useState } from "react";
import AddTask from "../components/AddTask";
import Header from "../components/header/Header";
import SeeTask from "../components/SeeTask";

function Home() {
    const [showComponent, setShowComponent] = useState(true); // Cambié la variable para corregir typo
    const [listTask, setlistTask] = useState([]);
    const [taskToEdit, setTaskToEdit] = useState(null); // Estado para la tarea a editar

    // Función para actualizar o agregar tarea
    const handleSaveTask = (task) => {
        if (taskToEdit) {
            // Si hay una tarea en edición, la actualizamos
            const updatedTasks = listTask.map((t) =>
                t === taskToEdit ? task : t
            );
            setlistTask(updatedTasks);
        } else {
            // Si no hay tarea en edición, agregamos una nueva
            setlistTask([...listTask, task]);
        }

        // Limpiar la tarea en edición
        setTaskToEdit(null);
        setShowComponent(false); // Cambiar a la vista de lista de tareas después de agregar/editar
    };

    return (
        <>
            <Header setShowComponent={setShowComponent} />

            {showComponent ? (
                <AddTask
                    listTask={listTask}
                    setlistTask={setlistTask}
                    taskToEdit={taskToEdit}
                    onSaveTask={handleSaveTask} // Pasamos la función de guardar
                />
            ) : (
                <SeeTask
                    listTask={listTask}
                    setTaskToEdit={(task) => {
                        setTaskToEdit(task);
                        setShowComponent(true); // Cambiar a la vista de edición cuando se selecciona una tarea
                    }}
                />
            )}
        </>
    );
}

export default Home;
