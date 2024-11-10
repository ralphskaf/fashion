import React, { useState } from 'react';
import axios from 'axios';
import img8 from '../../assets/img-8.jpeg'
import img7 from '../../assets/img-7.jpeg'
import img1 from '../../assets/img-1.jpeg'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const [successMessage, setSuccessMessage] = useState('');
      const [errorMessage, setErrorMessage] = useState('');
      const [isSubmitting, setIsSubmitting] = useState(false);
    // Web3Forms access key
  const WEB3FORMS_ACCESS_KEY = '5fe64383-22c0-4cf8-b10f-602c30089a6f';

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    // Send data to Web3Forms
    axios
      .post('https://api.web3forms.com/submit', {
        access_key: WEB3FORMS_ACCESS_KEY,
        ...formData,
      })
      .then((response) => {
        setSuccessMessage('Your message has been sent successfully!');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
        setIsSubmitting(false);
      })
      .catch((error) => {
        setErrorMessage('Oops! Something went wrong, please try again.');
        setIsSubmitting(false);
      });
  };
  return (
    <>

    <div >
<div className='container '>
<div className='row'>
<div className='col-lg-6'>
<img src={img1} alt="" className='w-100 '/>
</div>
<div className='col-lg-6'>
<section className=''>
    <div >
    <div className="With-me py-5 text-white">
            <h1 >Get in Touch</h1>
            <p>I’m always excited to meet new people and explore new opportunities. Whether you’re looking for a personal stylist, need editorial styling for a project, or just want some fashion advice, feel free to reach out.</p>
          </div>

      {/* Success or error message */}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      {/* Contact form */}
      <form onSubmit={handleSubmit}>
        <div className='contact-form-group'>
          {/* <label htmlFor="name">Name:</label> */}
          <input
            type="text"
            name="name"
            placeholder='full name'
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          {/* <label htmlFor="email">Email:</label> */}
          <input
            type="email"
            name="email"
            placeholder='Email'

            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder='Message'

            required
          ></textarea>
        </div>

        <button type="submit" disabled={isSubmitting} className='custom-button  my-5' >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
    </section>


</div>
</div>
</div>
    </div>
    
    
    
    
    </>
  )
}
