import { useSelector } from 'react-redux'
import { menu } from 'tools/shared/menu'
import { USER as entity } from "tools/utils/entities"

function usePageAccess(path) {
    const [controller, action] = path.split('/')
    // const { pageAccess } = useSelector(
    //     (s) => s[entity.name]
    // )

    for (const section of menu) {
        if (controller === 'dashboard' || controller === 'export' || controller === '') {
            return true
        } else if (controller === 'null') {
            return false
        } else if (section.controller === controller && section.children.length) {
            for (const page of section.children) {
                if (page.action === action) {
                    return true
                }
            }
        }
    }

    return false
}

export default usePageAccess