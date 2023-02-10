import React, { useState } from 'react';
import { MapPin, AtSign, GitHub, Globe, ChevronsRight } from 'react-feather';

import { validateEmail } from '../utils/helpers';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;
  const formId = import.meta.env.VITE_GETFORM_ID;
  const formUrl = 'https://getform.io/f/' + formId;

  // handles form validation
  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      // error message for invalid email
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({...formState, [e.target.name]: e.target.value });
    }
  };

  return (
    <div id="contact" className="max-w-screen-lg m-auto md:pl-20 px-8 py-32">
      <h1 className="pb-8 text-4xl font-medium text-center">Contact</h1>
      <div className="max-w-screen-lg w-full grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <p className="pb-8">Please feel free to reach out with any questions or opportunities. I look forward to hearing from you!</p>

        <div className="max-w-[75%] w-full mx-auto grid grid-cols-2 gap-2">
          <div className="inline-flex items-center">
            <MapPin className="text-stone-300" size={20} />&nbsp;Location
          </div>
          <div className="inline-flex justify-end items-center">
            : Los Angeles, CA
          </div>
          <div className="inline-flex items-center">
            <AtSign className="text-stone-300" size={20} />&nbsp;E-mail
          </div>
          <div className="inline-flex justify-end items-center">
            :&nbsp;<a href="mailto:hayashi.demi@gmail.com">hayashidemi@gmail.com</a>
          </div>
          <div className="inline-flex items-center">
            <GitHub className="text-stone-300" size={20} />&nbsp;GitHub
          </div>
          <div className="inline-flex justify-end items-center">
            :&nbsp;<a href="https://github.com/demivlkv" target="_blank">@demivlkv</a>
          </div>
          <div className="inline-flex items-center">
            <Globe className="text-stone-300" size={20} />&nbsp;Languages
          </div>
          <div className="inline-flex justify-end items-center">
            : English, Japanese
          </div>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div>
          <form method="POST" action={formUrl} id="contact-form" className="flex flex-col justify-center max-w-[600px] mx-auto w-full">
            <div class="w-full mx-auto">
              <label className="block text-slate-500 font-medium">Name:</label>
              <input type="text" defaultValue={name} onBlur={handleChange} name="name" className="w-full my-2 p-2 rounded bg-stone-100 border border-gray-300" />

              <label className="block text-slate-500 font-medium">E-mail:</label>
              <input type="email" defaultValue={email} onBlur={handleChange} name="email" className="w-full my-2 p-2 rounded bg-stone-100 border border-gray-300" />

              <label className="block text-slate-500 font-medium">Message:</label>
              <textarea name="message" defaultValue={message} onBlur={handleChange} rows="4" className="w-full my-2 p-2 rounded bg-stone-100 border border-gray-300" />

              {errorMessage && (
                <div>
                  <p className="error-text">{errorMessage}</p>
                </div>
              )}

              <button type="submit" className="group w-[130px] mx-auto flex items-center my-2 pl-6 py-2 border-2 border-gray-300 rounded hover:bg-[#a1a1a11e] hover:border-stone-700">
                Submit
                <span className="group-hover:ml-1 duration-300">
                  <ChevronsRight size={18} className="ml-2" />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;