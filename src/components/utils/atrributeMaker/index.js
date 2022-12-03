import FormCheckbox from "components/utils/form/items/FormCheckbox"
import FormInput from "components/utils/form/items/FormInput"

export default function AttributeMaker({ type, item, ...props }) {
    let attribute = {
        1: <FormInput
            key={item.ID}
            label={item.title}
            name={`prop${item.ID}`}
            {...props}
        />,
        2: item.Children.length && item.Children.map(child => (
            <FormCheckbox
                key={child.ID}
                label={child.title}
                name={`prop${child.ID}`}
                {...props}
            />
        )),
    }[type]
    return attribute || " "
}
