import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, SearchOutlined, MoreVert } from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import React from "react";
import "./chat.css";

function chat({messages}) {
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar />
        <div className="chat_headerInfo">
          <h3>Room Name</h3>
          <p>last seen at .....</p>
        </div>
        <div className="chat_headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>

          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat_body">
      {messages.map((message) => (
        <p className={`chat_message ${message.received && "chat_receiver"}`}>
        <span className="chat_name">{message.name}</span>
        {message.message}
        <span className="chat_timestamp">{message.timestamp}</span>
      </p>
      ))}
        
      
      </div>
      <div className="chat_footer">
        <InsertEmoticonIcon />
        <form>
          <input placeholder="type a message" type="text" />
          <button type="submit">send a message</button>
        </form>
        <MicIcon></MicIcon>
      </div>
    </div>
  );
}

export default chat;
