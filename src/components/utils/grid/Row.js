import { Row as AntRow } from 'antd';

export function Row({ children, ...props }) {
    return (
        <AntRow
            gutter={[16, 16]}
            {...props}
        >
            {children}
        </AntRow>
    );
}