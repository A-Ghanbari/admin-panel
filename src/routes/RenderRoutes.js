import { Route, Routes } from 'react-router-dom'
import PrivateRoute from 'routes/PrivateRoute'

export function RenderRoutes({ routes }) {
    return (
        <Routes>
            {routes.map(route => (
                <Route
                    key={route.key}
                    path={route.path}
                    element={<PrivateRoute>{route.component}</PrivateRoute>}
                />
            ))}
        </Routes>
    )
}