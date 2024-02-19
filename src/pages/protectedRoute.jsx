// Naviagte Component provided by react router dom
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({user, children}) => {
    if(!user){
        // id there is no user return to home page.
        //Navigate to home page using Navigate component
        return <Navigate to='/' />
    }
    return children;
}
export default ProtectedRoute;