import { API_BASE_URL } from 'tools/shared/constants'
import Icon from 'components/utils/field/Icon'
import FormInput from 'components/utils/form/items/FormInput'
import FormSelect from 'components/utils/form/items/FormSelect'
import FormUpload from 'components/utils/form/items/FormUpload'
import { ColumnGrid } from 'components/utils/grid'
import DraggableTable from 'components/utils/table/DraggableTable'

const fieldCol = { xs: 24, sm: 24, md: 12, lg: 12, xl: 8, xxl: 8 }
export default function PhotoGallery({ files, setFiles }) {
    const columns = [
        {
            title: "ردیف",
            key: "index",
            width: "5%",
            render: (text, record, index) => index + 1,
        },
        {
            title: 'پیوند',
            key: 'Link',
            width: "10%",
        },
        {
            title: 'نوع فایل',
            key: 'deviceType',
            width: "5%",
            render: (r) => {
                const type = {
                    1: "دسکتاپ",
                    2: "موبایل",
                    3: "آیکون"
                }[r]
                return type
            }
        },
        {
            title: 'فایل',
            key: 'Path',
            width: "5%",
            render: (r, f) => (
                <a href={`${API_BASE_URL}${r}`} target="blank">
                    <img src={`${API_BASE_URL}${r}`} width={32} height={32} />
                </a>
            ),
        },
        {
            title: 'عملیات',
            key: 'actions',
            width: "5%",
            render: (r, f) => (
                <div className="actions">
                    <Icon
                        key="delete"
                        type="delete"
                        title="حذف فایل"
                        onClick={() => removeFile(f)}
                    />
                </div>
            ),
        },
    ]

    const removeFile = (pic) => {
        setFiles(files => files.filter(file => file.Path !== pic.Path))
    }

    return (
        <div>
            <ColumnGrid col={fieldCol}>
                <FormInput
                    label="پیوند"
                    name='Link'
                />
                <FormSelect
                    label="نوع فایل"
                    name='deviceType'
                    items={[{
                        text: 'دسکتاپ',
                        value: 1
                    }, {
                        text: 'موبایل',
                        value: 2
                    }, {
                        text: 'آیکون',
                        value: 3
                    }]}
                />
                <FormUpload
                    label="بارگذاری فایل"
                    name="FilePath"
                    maxCount={1}
                />
            </ColumnGrid>
            <DraggableTable
                columns={columns}
                dataSource={files}
                files={files}
                setFiles={setFiles}
            />
        </div>
    )
}
