import MultiDatePicker from "react-multi-date-picker"
import persian_fa from "react-date-object/locales/persian_fa"
import persian from "react-date-object/calendars/persian"
import InputIcon from "react-multi-date-picker/components/input_icon"
import "components/utils/field/datePicker/dataPicker.scss"

const weekDays = ["ش", "ی", "د", "س", "چ", "پ", "ج"]

function DatePicker({ ...props }) {
    return (
        <MultiDatePicker
            weekDays={weekDays}
            onOpenPickNewDate={false}
            calendarPosition="bottom-center"
            fixMainPosition="true"
            calendar={persian}
            locale={persian_fa}
            onClose={() => true}
            render={<InputIcon />}
            {...props}
        />
    )
}

export default DatePicker
