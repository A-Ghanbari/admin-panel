import useAuth from 'hooks/useAuth'
import ErrorBoundary from 'components/error'
import Login from 'components/login'
import Panel from 'components/panel'
import { getTheme } from 'tools/utils'

import 'antd/dist/antd.min.css'
import "assets/sass/general.scss"

function App() {
    const isAuth = useAuth()
    const theme = getTheme()
    document.body.classList.add(theme || 'light')

    return (
        <ErrorBoundary>
            {isAuth ?
                <Panel /> :
                <Login />
            }
        </ErrorBoundary>
    )
}

export default App;
