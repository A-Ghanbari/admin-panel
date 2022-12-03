import { CKEditor } from "@ckeditor/ckeditor5-react"
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document'
import { editorUploadAdapter } from "store/actions/upload"
import "components/utils/field/editor/editor.scss"

export default function Editor({ type = "text", setValue, media = true, ...props }) {
    //type === "text" or "document"

    function uploadPlugin(editor) {
        editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
            return editorUploadAdapter(loader)
        }
    }

    return (
        <div className={`${type}`}>
            <div className="document-editor">
                <div className="document-editor__toolbar"></div>
                <div className="document-editor__editable-container ">
                    <div className="document-editor__editable">
                        <CKEditor
                            editor={DecoupledEditor}
                            config={{
                                extraPlugins: [uploadPlugin],
                                removePlugins: !media && ["EasyImage", "ImageUpload", "MediaEmbed"],
                            }}
                            onReady={editor => {
                                window.editor = editor
                                editor.ui.getEditableElement().parentElement.insertBefore(
                                    editor.ui.view.toolbar.element,
                                    editor.ui.getEditableElement()
                                )
                            }}
                            onChange={(event, editor) => {
                                const data = editor.getData()
                                // console.log(data)
                            }}
                            onBlur={(event, editor) => {
                                // console.log('Blur.', editor)
                            }}
                            onFocus={(event, editor) => {
                                // console.log('Focus.', editor)
                            }}
                            {...props}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
