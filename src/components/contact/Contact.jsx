import React from "react";
import "./Contact.css";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a158da79-635e-4841-b110-7aa231fcf9dd");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <section className="contact container section" id="contact">
        <h1 className="section__title">Get In Touch!</h1>

        <div className="contact__container grid">
          <div className="contact__info">
            <h3 className="contact__title">Let's talk about everything!</h3>
            <p className="contact__details">
              Don't like forms? Send me an email at haseeb@haseebworks.com👋{" "}
            </p>
          </div>

          <form onSubmit={onSubmit} method="POST" className="contact__form">
            <input
              type="hidden"
              name="access_key"
              value="a158da79-635e-4841-b110-7aa231fcf9dd"
            />

            <div className="contact__form-group">
              <div className="contact__form-div">
                <input
                  type="text"
                  className="contact__form-input"
                  placeholder="Insert your name"
                  name="name"
                />
              </div>

              <div className="contact__form-div">
                <input
                  type="email"
                  className="contact__form-input"
                  placeholder="Insert your email"
                  name="email"
                />
              </div>

              <div className="contact__form-div">
                <input
                  type="text"
                  className="contact__form-input"
                  placeholder="Insert your subject"
                  name="subject"
                />
              </div>

              <div className="contact__form-div contact__form-area">
                <textarea
                  name="message"
                  id=""
                  cols="30"
                  rows="10"
                  className="contact__form-input"
                  placeholder="Write your message"
                ></textarea>
              </div>
            </div>
            <button className="btn" type="submit">
              {" "}
              Send Message
            </button>
          </form>
          <span>{result}</span>
        </div>
      </section>
    </div>
  );
};

export default Contact;
