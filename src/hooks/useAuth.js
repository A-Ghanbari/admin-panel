import { useSelector } from "react-redux"
import { USER as entity } from "tools/utils/entities"

function useAuth() {
    const  isLogin  = useSelector(
        (s) => s[entity.name]
    )
    return isLogin
}

export default useAuth
