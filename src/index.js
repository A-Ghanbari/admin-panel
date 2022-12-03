import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import { ConfigProvider } from 'antd'
import fa_IR from 'antd/lib/locale/fa_IR'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import store from 'store'

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={fa_IR} direction='rtl'>
      <ReduxProvider store={store}>
        <Router>
          <App />
        </Router>
      </ReduxProvider>
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
);