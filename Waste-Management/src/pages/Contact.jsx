import React, { useState } from 'react';
import axios from 'axios';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/contact/submit', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
      <Header />
      <div className="contact-us">
        <div className="contact-header">
          <div className="overlay"></div>
          <h1>Contact Us</h1>
        </div>
        <div className="contact-us-container">
          <div className="container mx-auto p-8 flex flex-col lg:flex-row items-center lg:items-start">
            <div className="contact-info lg:w-1/3 lg:mr-8">
              <h2 className="text-2xl font-bold mb-4">Find Our Office</h2>
              <h3 className="text-3xl font-bold mb-2">Contact with the team</h3>
              <p className="mb-6">Lorem ipsum dolor sit amet consectetur. Aliquet amet elementum.</p>
              <div className="contact-detail mb-4">
                <p className="font-bold">Location :</p>
                <p>Kamaphokari</p>
              </div>
              <div className="contact-detail mb-4">
                <p className="font-bold">Phone no :</p>
                <p>(+977) 9812345678</p>
              </div>
              <div className="contact-detail">
                <p className="font-bold">Email :</p>
                <p>support@example.com</p>
              </div>
              <div className="map-container mb-4">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d742.569029955674!2d85.32350904669656!3d27.70884077752374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1908ed7fbacd%3A0x49b04b284da7a96f!2sIIMS%20College!5e0!3m2!1sen!2snp!4v1720852020149!5m2!1sen!2snp" 
                  width="100%" 
                  height="450" 
                  style={{border: 0}} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>
            <div className="contact-form ">
              <form className="shadow-box" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full p-2 border rounded" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-2">Your email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full p-2 border rounded" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block mb-2">Phone</label>
                  <input 
                    type="text" 
                    id="phone" 
                    className="w-full p-2 border rounded" 
                    required 
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full p-2 border rounded" 
                    required 
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    className="w-full p-2 border rounded" 
                    required
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Send Message</button>
              </form>
              {submitStatus === 'success' && (
                <p className="text-green-500 mt-4">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-500 mt-4">Error sending message. Please try again.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;