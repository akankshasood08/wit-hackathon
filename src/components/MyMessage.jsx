const MyMessage = ({ message }) => {
    if (message?.attachments?.length > 0) {
        return(
            <img
                src = {message.attachments[0].file}
            />
        )
    }
    return (
        <div>
            MyMessage
        </div>
    )
}

export default MyMessage;l