import { useState } from "react";
import "./Contact.scss";
const Contact = () => {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((prev) => ({ ...prev, [name]: value }));
    setErrorMsg("");
  };
  const handlSubmit = (event) => {
    event.preventDefault();
    if (
      (inputData.name.trim(), inputData.email.trim(), inputData.message.trim())
        .length <= 0
    )
      return setErrorMsg("All fields are required !");
    if (!inputData.email.includes("@"))
      return setErrorMsg("🤢 Please Enter Valid Email Address");
    setSuccessMsg("✔ Message Sent Successfully");
    window.location.reload();

    setTimeout(() => {
      setInputData({ name: "", email: "", message: "" });
      setSuccessMsg("");
    }, 3000);
  };
  return (
    <>
      <div className="contact_container">
        <div className="msg">
          {successMsg ? (
            <p className="success">{successMsg}</p>
          ) : (
            <p className="error">{errorMsg}</p>
          )}
        </div>
        <form action="" className="form_controll">
          <div className="input_controller">
            <label htmlFor="name">Name</label>
            <input
              autoFocus
              autoComplete="off"
              onChange={(event) => {
                handleChange(event);
              }}
              type="text"
              name="name"
              id="name"
              placeholder="Enter Name"
            />
            <label htmlFor="email">Email:</label>
            <input
              autoComplete="off"
              onChange={(event) => {
                handleChange(event);
              }}
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
            />
            <label htmlFor="message">Message</label>
            <textarea
              onChange={(event) => {
                handleChange(event);
              }}
              name="message"
              id="message"
              cols="10"
              rows="4"
              placeholder="Share Your Thoughts"
            ></textarea>
            <input
              type="submit"
              value="Send"
              className="btn"
              onClick={(event) => {
                handlSubmit(event);
              }}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
