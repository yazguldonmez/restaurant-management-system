import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

function ProtectedRoute() {

    const authenticated = useSelector((state) => state.auth.authenticated)

    if (authenticated === false) {

        return <Navigate to='/login' />
    }

    return <Outlet />

}

export default ProtectedRoute