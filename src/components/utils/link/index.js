import { Link as ReactRouterLink } from "react-router-dom";
import ACL from "components/ACL";

function Link(props) {
    return (
        <ReactRouterLink {...props}></ReactRouterLink>
    )
}

export default ACL(Link)
