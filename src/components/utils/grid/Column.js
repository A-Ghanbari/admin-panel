import { Col as AntCol } from 'antd';

export function Col({ children, ...props }) {
    return (
        <AntCol
            xs={24}
            sm={12}
            md={12}
            lg={12}
            xl={8}
            xxl={6}
            {...props}>
            {children}
        </AntCol>
    );
}