import { List as AntList } from 'antd';
import "components/utils/list/list.scss"


function List({ avatar, data, rest }) {
    return (
        <AntList
            itemLayout="horizontal"
            dataSource={data}
            {...rest}
            renderItem={item => (
                <AntList.Item>
                    <AntList.Item.Meta
                        avatar={avatar}
                        title={item.title}
                        description={item.des}
                    />
                </AntList.Item>
            )}
        />
    )
}

export default List