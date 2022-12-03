import { useEffect } from 'react'
import { API_BASE_URL } from 'tools/shared/constants'
import Icon from 'components/utils/field/Icon'
import FormInput from 'components/utils/form/items/FormInput'
import FormSelect from 'components/utils/form/items/FormSelect'
import FormUpload from 'components/utils/form/items/FormUpload'
import { ColumnGrid } from 'components/utils/grid'
import TableWithoutEntity from 'components/utils/table/TableWithoutEntity'

const fieldCol = { xs: 24, sm: 24, md: 12, lg: 12, xl: 8, xxl: 8 }
export default function PhotoGallery({ data, fileType, files, setFiles }) {

    useEffect(() => {
        setPhotoAlbum(data)
    }, [data])

    const setPhotoAlbum = (data) => {
        if (files.length === 0) {
            data?.map(pic => (
                setFiles(s => ([...s, {
                    ...pic,
                    Path: pic.path.replace(API_BASE_URL, ""),
                    fileTitle: pic.title,
                    IsActive: pic.status,
                    FileType: pic.fileType
                }]))
            ))
        }
    }

    const columns = [
        {
            title: "ردیف",
            key: "index",
            width: "5%",
            render: (text, record, index) => index + 1,
        },
        {
            title: 'عنوان',
            key: 'fileTitle',
            width: "10%",
        },
        {
            title: 'فعال',
            key: 'IsActive',
            width: "5%",
            render: (f) => (
                f === 1 ? <span className="approved" /> : <span className="unapproved" />
            ),
        },
        {
            title: 'نوع فایل',
            key: 'FileType',
            width: "5%",
            render: (r) => {
                const type = {
                    1: "عکس",
                    2: "فیلم"
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
        setFiles(files => files.filter(file => file.FilePath !== pic.FilePath))
    }

    return (
        <div>
            <h1>آلبوم تصاویر</h1>
            <ColumnGrid col={fieldCol}>
                <FormInput
                    label="عنوان"
                    name="fileTitle"
                />
                <FormSelect
                    label="فعال"
                    name="IsActive"
                    items={[
                        {
                            text: "بلی",
                            value: 1
                        },
                        {
                            text: "خیر",
                            value: 2
                        }
                    ]}
                />
                <FormSelect
                    label="نوع فایل"
                    name="FileType"
                    items={[
                        {
                            text: "عکس",
                            value: 1
                        },
                        {
                            text: "فیلم",
                            value: 2
                        }
                    ]}
                />
                <FormUpload
                    label="بارگذاری فایل"
                    name="FilePath"
                    maxCount={1}
                    accept={fileType === 1 ? ".png,.jpg,.jpeg" : ".MP4,.MOV,.WMV"}
                    type="video"
                />
            </ColumnGrid>
            <TableWithoutEntity
                columns={columns}
                dataSource={files}
            />
        </div>
    )
}
