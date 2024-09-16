import PropTypes from "prop-types";

const BottonAtom = ({ text, value, setShowComponent }) => {
    const handleClick = () => {
        setShowComponent(value);

        console.log(`Esta en la pantalla ${value ? "Izquierda" : "Derecha"}`);
    };

    return (
        <li>
            <button onClick={handleClick}>{text}</button>
        </li>
    );
};

BottonAtom.propTypes = {
    text: PropTypes.string.isRequired,
    value: PropTypes.bool.isRequired,
    setShowComponent: PropTypes.func.isRequired,
};

export default BottonAtom;
