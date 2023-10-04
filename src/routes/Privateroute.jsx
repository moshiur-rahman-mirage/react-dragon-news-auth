import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";


const Privateroute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation();
    if(loading){
        <span className="loading loading-spinner loading-lg"></span>
    }

    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>

    return (
        <div>
            
        </div>
    );
};

export default Privateroute;