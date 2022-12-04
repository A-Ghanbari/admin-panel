import { formatQuillValue } from "tools/utils"

export default function Messages() {
    return (
        <div className="message-box">
            {data?.map((message) => (
                <div
                    key={message.ID}
                    className={
                        message.isAdmin ? "admin-message" : "customer-message"
                    }
                >
                    <div className="sender">
                        <div className="sender-avatar" />
                        {message.senderName}
                    </div>
                    <div className="message">
                        <span
                            dangerouslySetInnerHTML={{
                                __html: formatQuillValue(message.content),
                            }}
                        />
                        <span className="date">{message.createdDateTime}</span>
                    </div>
                    {message.ticketFiles.map((file, index) => (
                        <a
                            href={file.fileAddress}
                            target="blank"
                            className="file-link"
                            key={index}
                        >
                            فایل {index + 1}
                        </a>
                    ))}
                </div>
            ))}
        </div>
    )
}

const data = [
    {
        ID: 16,
        ticketID: 0,
        parentID: 0,
        senderName: "کاربر",
        title: "تست2",
        content: "سلام",
        isAdmin: false,
        createdDateTime: "1400/10/13 16:58:10",
        ticketFiles: [],
    },
    {
        ID: 17,
        ticketID: 0,
        parentID: 0,
        senderName: "اپراتور",
        title: "title",
        content: '{"ops":[{"insert":"سلام\\nممنون\\n"}]}',
        isAdmin: true,
        createdDateTime: "1400/10/13 16:58:40",
        ticketFiles: [],
    },
]
