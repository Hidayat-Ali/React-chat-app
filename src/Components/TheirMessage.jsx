import React from "react";

const TheirMessage = ({ lastMessage, message }) => {
  const isFirstMessageByUser =
    !lastMessage || lastMessage.sender.userName !== message.sender.userName;
  return (
    <div className="message-row">
      {isFirstMessageByUser && (
        <div
          className="message-avatar"
          style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
        />
      )}
      {message?.attachements?.length > 0 ? (
        <img
          src={message.attachements[0].file}
          alt="message attachments"
          className="message-Image"
          style={{ marginLeft: isFirstMessageByUser ? '4px':'48px'}}
        />
      ) : (
        <div
          className="message"
          style={{
            float: "right",
           
            backgroundColor: "#CABCDC",
            marginLeft: isFirstMessageByUser ? '4px':'48px'
          }}
        >
          {message.text}
        </div>
      )}
    </div>
  );
};

export default TheirMessage;
