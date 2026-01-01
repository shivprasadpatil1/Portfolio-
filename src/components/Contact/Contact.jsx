import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./contact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const { firstName, lastName, email, phone, message } = formData;

    if (!firstName.trim() || firstName.length < 2) {
      toast.error("First name must be at least 2 characters");
      return false;
    }

    if (!lastName.trim() || lastName.length < 2) {
      toast.error("Last name must be at least 2 characters");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return false;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      toast.error("Phone number must be 10 digits");
      return false;
    }

    if (!message.trim() || message.length < 10) {
      toast.error("Message must be at least 10 characters");
      return false;
    }

    return true;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  setLoading(true);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "36e6b51f-4037-4383-aae8-25a01b131eec",

        // 🔔 Admin Email
        subject: "New Contact Form Submission 🚀",
        from_name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        replyto: formData.email,

        // 🔥 Auto-reply Email (Confirmation)
        autoresponse: true,
        autoresponse_subject: "Thanks for contacting me 👋",
        autoresponse_message: `
Hi ${formData.firstName},

Thank you for reaching out! 😊  
I’ve received your message and will get back to you as soon as possible.

Best regards,  
Shiv Patil
        `,

        // 📩 User form data
        ...formData,
      }),
    });

    const result = await response.json();

    if (result.success) {
      toast.success("Message sent successfully 🚀");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      toast.error("Failed to send message. Try again!");
    }
  } catch (error) {
    toast.error("Something went wrong. Please try later.");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="contact-section pb-4 pt-5" id="contact">
      <div className="container pt-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {/* Card */}
            <div className="card pt-3 shadow-lg border-0 rounded-4">
              <div className="col-12 text-center">
                <h2 className=" contact-title text-white d-flex justify-content-center ">
                  GET-IN <span style={{ color: "#5a9494ff" }}>TOUCH</span>
                </h2>
                <p className="contact-subtitle paragraph text-light text-center pb-2">
                  Have a question or want to work together? Send me a message!
                </p>
              </div>
              <div className="card-body  p-4">
                <form onSubmit={handleSubmit}>
                  <input
                    type="hidden"
                    name="access_key"
                    value="36e6b51f-4037-4383-aae8-25a01b131eec"
                  />

                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label
                        className="form-label text-white "
                        htmlFor="firstName "
                      >
                        {" "}
                        First Name:{" "}
                      </label>

                      <input
                        type="text"
                        className="form-control "
                        name="firstName"
                        placeholder="Please enter first name..."
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 mt-3 mt-md-0">
                      <label
                        className="form-label text-white "
                        htmlFor="lastName "
                      >
                        {" "}
                        Last Name:{" "}
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        name="lastName"
                        placeholder="Please enter last name..."
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label
                        className="form-label text-white "
                        htmlFor="email "
                      >
                        {" "}
                        Email:{" "}
                      </label>

                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Please enter email..."
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 mt-3 mt-md-0">
                      <label className="form-label text-white " htmlFor="phone">
                        {" "}
                        Phone:{" "}
                      </label>

                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        placeholder="Please enter phone number..."
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label
                      className="form-label text-white "
                      htmlFor="message "
                    >
                      {" "}
                      Message:{" "}
                    </label>

                    <textarea
                      className="form-control"
                      name="message"
                      rows="4"
                      placeholder="Please enter query..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <div className="submit-btn pt-2">
                    <button
                      type="submit"
                      className="btn btn-primary mx-auto d-block fw-bold py-2"
                      disabled={loading}
                    >
                      {loading ? "SENDING..." : "SUBMIT"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default Contact;
