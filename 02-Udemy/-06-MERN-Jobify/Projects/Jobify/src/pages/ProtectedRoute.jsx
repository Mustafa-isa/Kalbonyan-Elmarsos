import {Navigate} from "react-router-dom";
import {useAppContext} from "../context/appContext.jsx";
import {Loading} from "../components/index.jsx";

const ProtectedRoute = ({children}) => {
    const {user, userLoading} = useAppContext();

    if (userLoading) return <Loading/>;

    if (!user) {
        return <Navigate to={'/landing'}/>;
    }
    return children;
}

export default ProtectedRoute;