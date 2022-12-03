import { Space as AntSpace } from 'antd';

function Space({ children, ...props }) {
    return (
        <AntSpace
            {...props}
        >
            {children}
        </AntSpace>
    )
}

export default Space