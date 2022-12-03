import RenderRoutes from 'routes'
import QuestionnaireGroupRouter from 'components/questionnaire/questionnaireGroup/Router'
import QuestionnaireQARouter from 'components/questionnaire/questionnaireQA/Router'


const ROUTES = [
    {
        key: 'questionnaireGroup',
        path: '/questionnaireGroup/*',
        private: true,
        component: <QuestionnaireGroupRouter />,
    }, {
        key: 'QA',
        path: '/QA/*',
        private: true,
        component: <QuestionnaireQARouter />,
    }
]

function Router() {
    return (
        <RenderRoutes routes={ROUTES} />
    )
}

export default Router