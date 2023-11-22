import { useState } from "react";
import { LuSendHorizonal } from "react-icons/lu";

export default function Chatbot() {
  const [show, setShow] = useState(true);
  const handleShow = () => {
    setShow(!show);
  };
  const chatbot = [
    {
      botimg: "./chatbot.png",
      botmsg: "Welcome to your website! Which service are you looking for?",
      botmsg1: "Software development",
      botmsg2: "App Development",
      botmsg3: "Web development",
      botmsg4: "DevOps",
    },
  ];

  const [userdata, setUserdata] = useState("");
  const [userMessages, setUserMessages] = useState([]);
  const [botMessages, setBotMessages] = useState([]);

  const Submit = (e) => {
    e.preventDefault();

    if (userdata.trim() !== "") {
      setUserMessages([
        ...userMessages,
        { userimg: "./user.png", usermsg: userdata.trim() },
      ]);

      if (
        userdata === "Software development" ||
        userdata === "App Development" ||
        userdata === "Web development" ||
        userdata === "DevOps"
      ) {
        setTimeout(() => {
          setBotMessages([
            ...botMessages,
            {
              botimg: "./chatbot.png",
              botmsg1: "Enter Your Email and Phone Number",
            },
          ]);
        }, 1000);
      } else if (userdata.match(/^\d+$/) || userdata.includes("@")) {
        setBotMessages([
          ...botMessages,
          {
            botimg: "./chatbot.png",
            botmsg1: "Thanks, and your team will reach you soon.",
          },
        ]);
      } else {
        setBotMessages([
          ...botMessages,
          {
            botimg: "./chatbot.png",
            botmsg1:
              "Please select the correct service or provide a valid email/number.",
          },
        ]);
      }

      setUserdata("");
    }
  };

  return (
    <>
      {show ? (
        <div>
          <img src="./Message.png" className="message" onClick={handleShow} />
        </div>
      ) : (
        <div className="chat-bot">
          <div className="chat-title">
            <h3>Chat</h3>
            <p onClick={handleShow}>×</p>
          </div>
          <div className="chat-area">
            {chatbot.map((msg, index) => (
              <div key={index} className="chat">
                <div className="chat-bot-msg">
                  <img src={msg.botimg} className="botimg" alt="bot" />
                  <div>
                    <p>{msg.botmsg}</p>
                    <p>{msg.botmsg1}</p>
                    <p>{msg.botmsg2}</p>
                    <p>{msg.botmsg3}</p>
                    <p>{msg.botmsg4}</p>
                  </div>
                </div>
              </div>
            ))}

            {userMessages.map((userMsg, index) => (
              <div key={index} className="chat-user-msg">
                <img src={userMsg.userimg} className="userimg" alt="user" />
                <div>
                  <p>{userMsg.usermsg}</p>
                </div>
              </div>
            ))}
            {botMessages.map((botMsg, index) => (
              <div key={index} className="chat-bot-msg">
                <img src={botMsg.botimg} className="userimg" alt="user" />
                <div>
                  <p>{botMsg.botmsg1}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="input-send">
            <input
              type="text"
              value={userdata}
              onChange={(e) => setUserdata(e.target.value)}
              placeholder="Enter your Message.."
              className="input-chat"
            />
            <LuSendHorizonal className="send" onClick={Submit} />
          </div>
        </div>
      )}
    </>
  );
}
