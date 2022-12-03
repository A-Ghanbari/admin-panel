import { Skeleton as AntSkelton } from "antd";

function Skeleton({ children, ...props }) {
    return (
        <AntSkelton {...props}>
            {children}
        </AntSkelton>
    );
}

export default Skeleton;
