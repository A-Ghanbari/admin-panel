import RenderRoutes from 'routes'
import ContactUsRouter from 'components/content/contactUs/Router'
import PositionRouter from 'components/content/position/Router'
import SliderRouter from 'components/content/slider/Router'

const ROUTES = [
    {
        key: 'contact-us',
        path: '/contact-us/*',
        private: true,
        component: <ContactUsRouter />,
    },
    {
        key: 'position',
        path: '/position/*',
        private: true,
        component: <PositionRouter />,
    },
    {
        key: 'slider',
        path: '/slider/*',
        private: true,
        component: <SliderRouter />,
    },
]

function Router() {
    return (
        <RenderRoutes routes={ROUTES} />
    )
}

export default Router
