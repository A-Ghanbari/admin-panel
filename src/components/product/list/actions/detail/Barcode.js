import Descriptions from 'components/utils/descriptions'

function Barcode({ data }) {
    const columns = [
        {
            label: "بارکد اول",
            text: data[0]
        },
        {
            label: " بارکد دوم",
            text: data[1]
        }
    ]

    return (
        <Descriptions data={columns} />
    )
}

export default Barcode