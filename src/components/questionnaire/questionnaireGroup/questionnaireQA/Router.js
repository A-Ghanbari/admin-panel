import RenderRoutes from 'routes'
import List from './List'
import Create from 'components/questionnaire/questionnaireGroup/questionnaireQA/actions/Create'
import EditQA from 'components/questionnaire/questionnaireGroup/questionnaireQA/actions/Edit'
import AnswerRouter from "./answer/Router"


const ROUTES = [
    {
        key: 'list',
        path: '/*',
        private: true,
        component: <List />,
    }, {
        key: 'createQA',
        path: '/createQA',
        private: true,
        component: <Create />,
    }, {
        key: 'editQA',
        path: '/editQA/:ID',
        private: true,
        component: <EditQA />,
    }, {
        key: "createAnswer",
        path: "/createAnswer/:ID/*",
        private: true,
        component: <AnswerRouter />
    }
]

function Router() {
    return (
        <RenderRoutes routes={ROUTES} />
    )
}

export default Router