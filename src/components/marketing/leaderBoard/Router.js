import RenderRoutes from 'routes'
import List from 'components/marketing/leaderBoard/List'
import Create from 'components/marketing/leaderBoard/actions/create'
import Edit from 'components/marketing/leaderBoard/actions/edit'
import ReagentCondition from 'components/marketing/leaderBoard/actions/roles/reagentCondition'
import LoginCount from 'components/marketing/leaderBoard/actions/roles/loginCount'
import ProfileCondition from 'components/marketing/leaderBoard/actions/roles/profileCondition'
import OrderCondition from 'components/marketing/leaderBoard/actions/roles/orderCondition'
import PriceCondition from 'components/marketing/leaderBoard/actions/roles/priceCondition'
import GameCondition from 'components/marketing/leaderBoard/actions/roles/gameCondition'
import PrizeCondition from 'components/marketing/leaderBoard/actions/roles/prizeCondition'
import ProductsCondition from 'components/marketing/leaderBoard/actions/roles/productsCondition'
import QuestionnaireCondition from 'components/marketing/leaderBoard/actions/roles/questionnaireCondition'

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
        path: '/edit/:ID',
        private: true,
        component: <Edit />,
    }, {
        key: 'reagent-condition',
        path: '/reagent-condition/:ID',
        private: true,
        component: <ReagentCondition />,
    }, {
        key: 'login-count',
        path: '/login-count/:ID',
        private: true,
        component: <LoginCount />,
    }, {
        key: 'profile-condition',
        path: '/profile-condition/:ID',
        private: true,
        component: <ProfileCondition />,
    }, {
        key: 'order-condition',
        path: '/order-condition/:ID',
        private: true,
        component: <OrderCondition />,
    }, {
        key: 'price-condition',
        path: '/price-condition/:ID',
        private: true,
        component: <PriceCondition />,
    }, {
        key: 'game-condition',
        path: '/game-condition/:ID',
        private: true,
        component: <GameCondition />,
    }, {
        key: 'prize-condition',
        path: '/prize-condition/:ID',
        private: true,
        component: <PrizeCondition />,
    }, {
        key: 'products-condition',
        path: '/products-condition/:ID',
        private: true,
        component: <ProductsCondition />,
    }, {
        key: 'questionnaire-condition',
        path: '/questionnaire-condition/:ID',
        private: true,
        component: <QuestionnaireCondition />,
    }
]

function Router() {
    return (
        <RenderRoutes routes={ROUTES} />
    )
}

export default Router