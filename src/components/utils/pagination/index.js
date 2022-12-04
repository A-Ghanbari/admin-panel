import ACL from "components/ACL";
import { Pagination as AntPagination } from "antd";
import "components/utils/pagination/pagination.scss";
import { useSelector } from "react-redux";

function Pagination({ entity, ...props }) {
    // const { pageIndex, pageSize, totalRecords } = useSelector(
    //     (s) => s[entity.pluralizeName]
    // );

    return (
        <AntPagination
            position={["topRight", "bottomRight"]}
            pageSizeOptions={["10", "20", "30"]}
            size="medium"
            showSizeChanger={true}
            current={1}
            total={10}
            pageSize={10}
            defaultPageSize={10}
            {...props}
        />
    );
}

export default ACL(Pagination);