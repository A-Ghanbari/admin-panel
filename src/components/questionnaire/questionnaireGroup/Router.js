import RenderRoutes from 'routes'
import List from 'components/questionnaire/questionnaireGroup/List'
import Create from 'components/questionnaire/questionnaireGroup/actions/Create'
import Edit from 'components/questionnaire/questionnaireGroup/actions/Edit'
import QuestionnaireQARouter from 'components/questionnaire/questionnaireGroup/questionnaireQA/Router'

const ROUTES = [
    {
        key: 'list',
        path: '/*',
        private: true,
        component: <List />,
    }, {
        key: 'create',
        path: '/create',
        private: true,
        component: <Create />,
    }, {
        key: 'edit',
        path: '/edit/:parentID',
        private: true,
        component: <Edit />,
    }, {
        key: "createQuestion",
        path: "/createQuestion/:parentID/*",
        private: true,
        component: <QuestionnaireQARouter />
    }
]

function Router() {
    return (
        <RenderRoutes routes={ROUTES} />
    )
}

export default Router