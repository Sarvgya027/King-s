import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "http://localhost:4000/api/v1/message/send",
        {
          name,
          email,
          subject,
          message,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="contact container">
        <div className="banner">
          <div className="item">
            <h4>Address</h4>
            <p>123 Main Street, Cityville, Stateprovince,</p>
          </div>
          <div className="item">
            <h4>Call us</h4>
            <p>Call us: (123) 456-7890</p>
          </div>
          <div className="item">
            <h4>Mail us</h4>
            <p>Mail us: Vfz5@example.com</p>
          </div>
        </div>
        <div className="banner">
          <div className="item"></div>
          <div className="item">
            <form onSubmit={handleSendMessage}>
              <h2>Get in touch</h2>
              <div>
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="name">Name</label>
                <input
                  type="email"
                  id="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="email">Email</label>
              </div>
              <input
                type="text"
                id="subject"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <label htmlFor="subject">Subject</label>
              <textarea
                rows={5}
                id="message"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <label htmlFor="message">Message</label>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;