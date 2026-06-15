import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Chat = ({ socket }) => {
  const [message, setmessage] = useState("");
  const [allMessage, setallMessage] = useState([])

  useEffect(() => {
    if (socket.current) {
      socket.current.on("broadcastMsg", (receivedMessage) => {
        console.log("received from backend:  " + receivedMessage);
        setallMessage([...allMessage, receivedMessage])
      });
    }
  });
  const handleSend = () => {
    console.log("sent message: " + message);
    socket.current.emit("sendMsg", message);
  };

  return (
    <>
      <div>{allMessage.map((msg, index)=>(<div key={index}>{msg}</div>))}</div>
      <input
        type="text"
        placeholder="Type your message"
        onChange={(e) => setmessage(e.target.value)}
      />
      <button onClick={handleSend}>Send Message</button>
    </>
  );
};

export default Chat;
