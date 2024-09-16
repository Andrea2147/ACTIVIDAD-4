import PropTypes from "prop-types";

import BottonAtom from "./components/BottonAtom";

const Header = ({ setShowComponent }) => {
    return (
        <header>
            <nav>
                <ul>
                    <BottonAtom text="Agregar Tarea" value={true} setShowComponent={setShowComponent} />
                    <BottonAtom text="Ver Tareas" value={false} setShowComponent={setShowComponent} />
                </ul>
            </nav>
        </header>
    );
};

Header.propTypes = {
    setShowComponent: PropTypes.func.isRequired,
};

export default Header;
