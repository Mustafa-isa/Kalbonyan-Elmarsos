import {useAppContext} from "../context/appContext.jsx";

const Alert = () => {
    const {alertType, alertText} = useAppContext();
    return (
        <div className={`alert alert-${alertType}`}
        >
            {alertText}
        </div>
    )
};

export default Alert;