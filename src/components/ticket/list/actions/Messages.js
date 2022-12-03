import { formatQuillValue } from "tools/utils"

export default function Messages({ data }) {
    return (
        <div className='message-box'>
            {data?.map((message) => (
                <div key={message.ID} className={message.isAdmin ? "admin-message" : "customer-message"}>
                    <div className='sender'>
                        <div className='sender-avatar' />
                        {message.senderName}
                    </div>
                    <div className='message'>
                        <span dangerouslySetInnerHTML={{ __html: formatQuillValue(message.content) }} />
                        <span className='date'>{message.createdDateTime}</span>
                    </div>
                    {message.ticketFiles.map((file, index) => (
                        <a href={file.fileAddress} target="blank" className="file-link" key={index}>
                            فایل {index + 1}
                        </a>
                    ))}
                </div>
            ))}
        </div>
    )
}
