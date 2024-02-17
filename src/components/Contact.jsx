import { useState } from 'react';
import { motion } from 'framer-motion';

import { validateEmail, capitalizeFirstLetter } from '../utils/helpers';
import MapPin from './Icons/MapPin';
import AtSign from './Icons/AtSign';
import GitHub from './Icons/GitHub';
import Globe from './Icons/Globe';
import ChevronsRight from './Icons/ChevronsRight';

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
        setErrorMessage(`${capitalizeFirstLetter(e.target.name)} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({...formState, [e.target.name]: e.target.value });
    }
  };

  return (
    <section id="contact" className="max-w-screen-lg m-auto md:pl-20 px-8 py-12 sm:py-28">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        viewport={{ once: true }}
      >
        Contact
      </motion.h2>
      <motion.div
        className="max-w-screen-lg w-full grid grid-cols-1 md:grid-cols-2 gap-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.75 }}
        viewport={{ once: true }}
      >
        <div>
          <p>
            Please feel free to reach out with any questions or opportunities, and I'll do my best to respond as soon as possible. I look forward to hearing from you!
          </p>

          <div className="max-w-[90%] w-full mx-auto py-8 grid grid-cols-2 gap-2 sm:gap-4">
            <div className="inline-flex items-center">
              <span className="text-emerald-400 dark:text-teal-200"><MapPin /></span>&nbsp;Location
            </div>
            <div className="inline-flex justify-end items-center">
              : Los Angeles, CA
            </div>
            <div className="inline-flex items-center">
              <span className="text-emerald-400 dark:text-teal-200"><AtSign /></span>&nbsp;E-mail
            </div>
            <div className="inline-flex justify-end items-center">
              :&nbsp;<a href="mailto:hayashi.demi@gmail.com" className="text-emerald-400 dark:text-teal-200 hover:text-gray-300 dark:hover:text-gray-400">hayashi.demi@gmail.com</a>
            </div>
            <div className="inline-flex items-center">
              <span className="text-emerald-400 dark:text-teal-200"><GitHub /></span>&nbsp;GitHub
            </div>
            <div className="inline-flex justify-end items-center">
              :&nbsp;<a href="https://github.com/demivlkv" target="_blank" className="text-emerald-400 dark:text-teal-200 hover:text-gray-300 dark:hover:text-gray-400">@demivlkv</a>
            </div>
            <div className="inline-flex items-center">
              <span className="text-emerald-400 dark:text-teal-200"><Globe /></span>&nbsp;Languages
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
              <label className="block font-['Source_Code_Pro'] font-medium">
                Name:
              </label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                onBlur={handleChange}
              />

              <label className="block font-['Source_Code_Pro'] font-medium">
                E-mail:
              </label>
              <input
                type="email"
                name="email"
                defaultValue={email}
                onBlur={handleChange}
              />

              <label className="block font-['Source_Code_Pro'] font-medium">
                Message:
              </label>
              <textarea
                name="message"
                defaultValue={message}
                onBlur={handleChange}
                rows="4"
              />

              {errorMessage && (
                <div>
                  <p className="text-blue-900 dark:text-rose-200 font-['Source_Code_pro'] font-medium tracking-tight text-xs">{errorMessage}</p>
                </div>
              )}
              <button type="submit" className="group w-[120px]">
                Submit
                <span className="group-hover:text-emerald-400 dark:group-hover:text-teal-200 group-hover:ml-1 duration-300">
                  <ChevronsRight size={15} />
                </span>
              </button>
            </div>
          </form>
        </div>
    </motion.div>
  </section>
  );
};

export default Contact;