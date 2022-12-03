import RenderRoutes from 'routes'
import { Layout } from 'antd'
import Header from 'components/generic/Header'
import Content from 'components/generic/Content'
import Sidebar from 'components/generic/Sidebar'
import Footer from 'components/generic/Footer'

import DashboardRouter from 'components/dashboard/Router'
import WidgetRouter from 'components/widget/Router'
import ManagementReportRouter from 'components/managementReport/Router'
import WarehouseReportRouter from 'components/warehouseReport/Router'
import OrderRouter from 'components/order/Router'
import PackingRouter from 'components/packing/Router'
import CentralExchangeRouter from 'components/centralExchange/Router'
import ManualOrderRouter from 'components/manualOrder/Router'
import SepidarRouter from 'components/sepidar/Router'
import TicketRouter from 'components/ticket/Router'
import PostRouter from 'components/post/Router'
import CustomerRouter from 'components/customer/Router'
import CommentRouter from 'components/comment/Router'
import ProductRouter from 'components/product/Router'
import FAQRouter from 'components/FAQ/Router'
import CommercialRouter from 'components/commercial/Router'
import MarketingRouter from 'components/marketing/Router'
import ContentRouter from 'components/content/Router'
import BlogRouter from 'components/blog/Router'
import QuestionnaireRouter from "components/questionnaire/Router"
import RoleRouter from 'components/role/Router'
import LandingPageRouter from 'components/landingPage/Router'
import SettingRouter from 'components/setting/Router'
import ExportRouter from 'components/export/Router'
import { cutString } from 'tools/utils'
import { useLocation } from 'react-router-dom'

const ROUTES = [
    {
        key: 'dashboard',
        path: '/*',
        component: <DashboardRouter />,
    }, {
        key: 'widget',
        path: 'widget/*',
        component: <WidgetRouter />,
    }, {
        key: 'management-report',
        path: 'management-report/*',
        component: <ManagementReportRouter />,
    }, {
        key: 'warehouse-report',
        path: 'warehouse-report/*',
        component: <WarehouseReportRouter />,
    }, {
        key: 'order',
        path: 'order/*',
        component: <OrderRouter />,
    }, {
        key: 'packing',
        path: 'packing/*',
        component: <PackingRouter />,
    }, {
        key: 'manual-order',
        path: 'manual-order/*',
        component: <ManualOrderRouter />,
    }, {
        key: 'central-exchange',
        path: 'central-exchange/*',
        component: <CentralExchangeRouter />,
    }, {
        key: 'sepidar',
        path: 'sepidar/*',
        component: <SepidarRouter />
    }, {
        key: 'ticket',
        path: 'ticket/*',
        component: <TicketRouter />,
    }, {
        key: 'post',
        path: 'post/*',
        component: <PostRouter />,
    }, {
        key: 'customer',
        path: 'customer/*',
        component: <CustomerRouter />,
    }, {
        key: 'comment',
        path: 'comment/*',
        component: <CommentRouter />,
    }, {
        key: 'product',
        path: 'product/*',
        component: <ProductRouter />,
    }, {
        key: 'FAQ',
        path: 'FAQ/*',
        component: <FAQRouter />,
    }, {
        key: 'commercial',
        path: 'commercial/*',
        component: <CommercialRouter />,
    }, {
        key: 'marketing',
        path: 'marketing/*',
        component: <MarketingRouter />,
    }, {
        key: 'content',
        path: 'content/*',
        component: <ContentRouter />,
    }, {
        key: 'blog',
        path: 'blog/*',
        component: <BlogRouter />,
    }, {
        key: 'questionnaire',
        path: 'questionnaire/*',
        component: <QuestionnaireRouter />,
    }, {
        key: 'role',
        path: 'role/*',
        component: <RoleRouter />,
    }, {
        key: 'landingPage',
        path: 'landingPage/*',
        component: <LandingPageRouter />,
    }, {
        key: 'setting',
        path: 'setting/*',
        component: <SettingRouter />,
    }
]

export default function Panel() {
    const location = useLocation()
    const path = cutString(location.pathname, 1, location.pathname.length)
    const [controller, action] = path.split('/')

    return (
        <>
            {controller === "export" ?
                <ExportRouter /> :
                <div>
                    <Layout>
                        <Sidebar />
                        <Layout>
                            <Header />
                            <Content>
                                <RenderRoutes routes={ROUTES} />
                                <Footer />
                            </Content>
                        </Layout>
                    </Layout>
                </div>
            }
        </>
    )
}
