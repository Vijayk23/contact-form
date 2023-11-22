import { useState } from "react";
import "./App.css";
import Chatbot from "./Chatbot";

function App() {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const Changes = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const Submit = (e) => {
    e.preventDefault();
    console.log(data);
    alert("Message Sent Successfully");
    setData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <div className="contact-form">
        <div className="contact-title">
          <h1>Contact Us</h1>
        </div>
        <div className="form-container">
          <form method="post" onSubmit={Submit}>
            <input
              type="text"
              name="name"
              onChange={Changes}
              value={data.name}
              placeholder="Your Name*"
              required
            />
            <input
              type="email"
              name="email"
              onChange={Changes}
              value={data.email}
              placeholder="Your Email*"
              required
            />
            <input
              type="text"
              name="subject"
              onChange={Changes}
              value={data.subject}
              placeholder="Subject*"
              required
            />
            <textarea
              placeholder="Message*"
              onChange={Changes}
              value={data.message}
              name="message"
              required
            />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      <Chatbot />
    </>
  );
}

export default App;
