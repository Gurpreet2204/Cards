/* eslint-disable react/prop-types */
import './Input.css';

const Input = ({ placeHolder, type }) => {
    return (
        <div className="input">
            <input type={type} placeholder={placeHolder} />
        </div>
    );
};

export default Input;
