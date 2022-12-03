import RenderRoutes from 'routes'
import ACC from 'components/export/ACC'
import ACCManual from 'components/export/ACCManual'
import Invoice from 'components/export/Invoice'
import Label from 'components/export/Label'
import Barcode from 'components/export/Barcode'
import InvoiceManual from 'components/export/InvoiceManual'
import LabelManual from 'components/export/LabelManual'
import CentralExchangeBarcode from 'components/export/CentralExchangeBarcode'

const ROUTES = [
    {
        key: 'acc',
        path: '/export/acc/:ID',
        private: true,
        component: <ACC />,
    }, {
        key: 'accManual',
        path: '/export/accManual/:ID',
        private: true,
        component: <ACCManual />,
    }, {
        key: 'invoice',
        path: '/export/invoice/:ID',
        private: true,
        component: <Invoice />,
    }, {
        key: 'invoiceManual',
        path: '/export/invoiceManual/:ID',
        private: true,
        component: <InvoiceManual />,
    }, {
        key: 'label',
        path: '/export/label/:ID',
        private: true,
        component: <Label />,
    }, {
        key: 'labelManual',
        path: '/export/labelManual/:ID',
        private: true,
        component: <LabelManual />,
    }, {
        key: 'barcode',
        path: '/export/barcode/:ID',
        private: true,
        component: <Barcode />,
    }, {
        key: 'barcode',
        path: '/export/central-exchange-barcode/:ID',
        private: true,
        component: <CentralExchangeBarcode />,
    }
]

function Router() {
    return (
        <RenderRoutes routes={ROUTES} />
    )
}

export default Router
