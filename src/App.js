import React, { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./sidebar.js";
import Chat from "./chat.js";
import Pusher from "pusher-js";
import axios from "axios";

function App() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:9000/messages/sync").then((response) => {
      //console.log(response.data);
      setMessages(response.data);
    });
  }, []);

  useEffect(() => {
    const pusher = new Pusher("2d836f8d085f444e89ed", {
      cluster: "mt1",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", function (data) {
      alert(JSON.stringify(data));
      setMessages([...messages, data]);
    });
    console.log(messages);
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);
  return (
    <div className="app">
      <div className="app_body">
        <Sidebar></Sidebar>
        <Chat messages={messages}></Chat>
      </div>
    </div>
  );
}

export default App;
