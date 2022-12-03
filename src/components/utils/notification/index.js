import { notification as AntNotification } from 'antd';
import "components/utils/notification/notification.scss"

AntNotification.config({
    placement: 'topLeft',
    bottom: 50,
    duration: 3,
    rtl: true,
});

function Notification({ type, message, description = '', placement = 'topLeft' }) {
    AntNotification[type]({
        className: 'ant-notification',
        message,
        description,
        placement,
    });
}
Notification.success = (message, description, placement) => {
    Notification({ type: 'success', message, description, placement })
}

Notification.error = (message, description, placement) => {
    Notification({ type: 'error', message, description, placement })
}

Notification.warning = (message, description, placement) => {
    Notification({ type: 'warning', message, description, placement })
}

export default Notification;



