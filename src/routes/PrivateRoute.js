import Login from 'components/login'
import useAuth from 'hooks/useAuth';
import usePageAccess from 'hooks/usePageAccess';
import { useLocation } from 'react-router-dom';
import { cutString } from 'tools/utils';
import Dashboard from 'components/dashboard'



function PrivateRoute({ children }) {
    const isAuth = useAuth()
    const location = useLocation()
    const path = cutString(location.pathname, 1, location.pathname.length)
    const hasPageAccess = usePageAccess(path)

    if (isAuth) {
        if (hasPageAccess) {
            return children
        } else {
            return <Dashboard />
        }
    }
    return <Login />
}

export default PrivateRoute;
