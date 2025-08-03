import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    setStatus('Sending...');

    emailjs.sendForm(
      'service_48y0mgs',
      'template_05rpio3',
      formRef.current,
      'Mqf9abBRyEj1ThHzS'
    )
    .then(
      (result) => {
        console.log(result.text);
        setStatus('Message sent successfully!');
        formRef.current.reset();
      },
      (error) => {
        console.error('EmailJS Error:', error);
        setStatus('Failed to send message. Please try again.');
      }
    );
  };

  return (
    <section id="contact" className="bg-neutral-950 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-400 mb-8">
          Have a question, want to collaborate, or just want to say hi? Send me a message!
        </p>

        <form ref={formRef} onSubmit={sendEmail} className="max-w-xl mx-auto space-y-4 text-left">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-lg bg-neutral-800 text-white focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-lg bg-neutral-800 text-white focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full px-4 py-3 rounded-lg bg-neutral-800 text-white focus:outline-none"
          ></textarea>

          <button
            type="submit"
            className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-300 transition duration-300"
          >
            Send Message
          </button>
        </form>

        {status && <p className="mt-4 text-sm text-gray-400">{status}</p>}

       
      </div>
    </section>
  );
};

export default Contact;
