import { useEffect } from 'react'
import { API_BASE_URL } from 'tools/shared/constants'
import Icon from 'components/utils/field/Icon'
import FormSelect from 'components/utils/form/items/FormSelect'
import FormUpload from 'components/utils/form/items/FormUpload'
import { ColumnGrid } from 'components/utils/grid'
import DraggableTable from 'components/utils/table/DraggableTable'

const fieldCol = { xs: 24, sm: 24, md: 12, lg: 12, xl: 8, xxl: 8 }
export default function PhotoAlbum({ data, fileType, files, setFiles }) {

    useEffect(() => {
        setPhotoAlbum(data)
    }, [data])

    const setPhotoAlbum = (data) => {
        if (files.length === 0) {
            data?.map(pic => (
                setFiles(s => ([...s, {
                    ...pic,
                    FilePath: pic.FilePath.replace(API_BASE_URL, ""),
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
            title: 'فعال',
            key: 'IsActive',
            render: (f) => (
                f ? <span className="approved" /> : <span className="unapproved" />
            ),
        },
        {
            title: 'نوع فایل',
            key: 'FileType',
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
            key: 'FilePath',
            render: (f, r) => (
                (r.FileType === 1) ?
                    <a href={`${API_BASE_URL}${f}`} target="blank">
                        <img src={`${API_BASE_URL}${f}`} width={32} height={32} />
                    </a>
                    :
                    <video width="80" height="50" autoPlay>
                        <source src={`${API_BASE_URL}${f}`} type="video/mp4" />
                    </video>
            ),
        },
        {
            title: 'عملیات',
            key: 'actions',
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
                <FormSelect
                    label="فعال"
                    name="IsActive"
                    items={[
                        {
                            text: "بلی",
                            value: true
                        },
                        {
                            text: "خیر",
                            value: false
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
                    type={fileType === 1 ? "pic" : "video"}
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
