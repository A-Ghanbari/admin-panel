import { Image as AntImage } from 'antd';
import ACL from 'components/ACL';

const Image = ({ src, ...props }) => (
    <AntImage
        src={src}
        {...props}
    />
);

export default ACL(Image)