import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Initialize EmailJS (do this once on component mount)
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "nptatdt@gmail.com",
        },
      );

      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      setIsLoading(false);
      setError("Failed to send message. Please try again later.");
      console.error("Email sending error:", err);
    }
  };

  const contactInfo = [
    {
      icon: "fa-solid fa-phone",
      label: "Phone",
      value: "+84 927183879",
      link: "tel:+84927183879",
    },
    {
      icon: "fa-regular fa-envelope",
      label: "Email",
      value: "nptatdt@gmail.com",
      link: "mailto:nptatdt@gmail.com",
    },
    {
      icon: "fa-brands fa-linkedin",
      label: "LinkedIn",
      value: "19anim",
      link: "https://www.linkedin.com/in/19anim/",
      external: true,
    },
    {
      icon: "fa-brands fa-github",
      label: "GitHub",
      value: "19anim",
      link: "https://github.com/19anim",
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen snap-start bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 pt-20 pb-16 px-4"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-emerald-300 mb-4">Get In Touch</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you!
            Reach out through any of the channels below or fill out the contact form.
          </p>
        </div>

        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              target={info.external ? "_blank" : "_self"}
              rel={info.external ? "noopener noreferrer" : ""}
              className="group"
            >
              <div className="border border-emerald-300 rounded-lg p-6 flex flex-col gap-3 items-center justify-center h-full hover:bg-emerald-300/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:-translate-y-1">
                <div className="text-emerald-300 text-3xl group-hover:animate-bounce transition-all duration-700">
                  <i className={info.icon}></i>
                </div>
                <div className="text-center">
                  <p className="text-gray-400 text-sm">{info.label}</p>
                  <p className="text-emerald-300 font-semibold text-sm line-clamp-1">
                    {info.value}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Main Contact Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800/50 border border-emerald-300/30 rounded-xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-emerald-300 mb-6">Send Me a Message</h2>

              {isSubmitted && (
                <div className="mb-6 p-4 bg-emerald-500/20 border border-emerald-400 rounded-lg">
                  <p className="text-emerald-300 font-semibold">
                    ✓ Message sent successfully! I'll get back to you soon.
                  </p>
                </div>
              )}

              {error && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-400 rounded-lg">
                  <p className="text-red-300 font-semibold">✗ {error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-emerald-300 text-sm font-semibold mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your name"
                      className="w-full bg-slate-700/50 border border-emerald-300/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-300 focus:ring-1 focus:ring-emerald-300 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-emerald-300 text-sm font-semibold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                      className="w-full bg-slate-700/50 border border-emerald-300/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-300 focus:ring-1 focus:ring-emerald-300 transition"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-emerald-300 text-sm font-semibold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="What is this about?"
                    className="w-full bg-slate-700/50 border border-emerald-300/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-300 focus:ring-1 focus:ring-emerald-300 transition"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-emerald-300 text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell me more about your project or inquiry..."
                    rows="5"
                    className="w-full bg-slate-700/50 border border-emerald-300/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-300 focus:ring-1 focus:ring-emerald-300 transition resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-400 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <span className="inline-block animate-spin">↻</span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="fa-solid fa-paper-plane"></i>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border border-emerald-300/30 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                <h3 className="text-emerald-300 font-bold text-lg">Available Now</h3>
              </div>
              <p className="text-gray-300 text-sm">
                I'm actively looking for new opportunities. Let's create something amazing together!
              </p>
            </div>

            <div className="bg-slate-800/50 border border-emerald-300/30 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-emerald-300 font-bold text-lg mb-3 flex items-center gap-2">
                <i className="fa-solid fa-hourglass-end text-lg"></i>
                Response Time
              </h3>
              <p className="text-gray-300 text-sm">
                I typically respond to inquiries within 24-48 hours.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm">
            Prefer a quick chat? Connect on{" "}
            <a
              href="https://www.facebook.com/19.anim/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 underline"
            >
              Facebook
            </a>{" "}
            or{" "}
            <a
              href="https://www.linkedin.com/in/19anim/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 underline"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
