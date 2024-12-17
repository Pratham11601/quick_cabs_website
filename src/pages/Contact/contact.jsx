import React, { useState } from "react";
import { motion } from "framer-motion";
import useOnScreen from '../../components/common/useOnScreen';
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineMailOutline } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import image from '../../assets/book.jpg';
import { useForm, ValidationError } from '@formspree/react';

const ContactUs = () => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };

  const [state, handleSubmit] = useForm("mjkvdqqq");
  const [formValues, setFormValues] = useState({ email: "", name: "", phone_no: "", message: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormValues({ email: "", name: "", phone_no: "", message: "" });
  };

  const customHandleSubmit = async (e) => {
    e.preventDefault();
    const res = await handleSubmit(e);
    resetForm();
    if (state.succeeded) {
      resetForm();
      console.log(res);
    }
  };

  const [ref, isVisible] = useOnScreen(options);

  return (
    
    <section className={`py-4`} ref={ref}>
      <motion.div
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`}
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <form action="https://fabform.io/f/{form-id}" method="post" onSubmit={customHandleSubmit}>
                            <motion.section
                                className="text-gray-600 body-font relative"
                                initial={{ y: 50 }}
                                animate={{ y: 0 }}
                                transition={{ duration: 1 }}
                            >
                                <div className="container px-5 py-16 mx-auto flex sm:flex-nowrap flex-wrap">
                                    <motion.div
                                        className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"
                                        initial={{ scale: 0.9 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 1 }}
                                        whileHover={{ scale: 1.05 }}  // Apply hover effect
                                    >
                                        <img
                                            src={image}
                                            alt="Contact Us"
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                      
                                        <motion.div
                                            className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg relative flex flex-wrap py-6 rounded-xl shadow-2xl opacity-80 animate-fade-in-top hover:shadow-xl hover:scale-105 transition-transform duration-300"
                                            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)" }}
                                        >
                                            <div className="lg:w-1/2 px-6">
                                                <motion.h2
                                                    className="title-font font-extrabold text-white tracking-widest text-sm"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ delay: 0.5, duration: 0.5 }}
                                                >
                                                    ADDRESS
                                                </motion.h2>
                                                <motion.p
                                                    className="mt-1 text-white"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ delay: 0.7, duration: 0.5 }}
                                                >
                                                    Katraj near Navale Bridge, Pune
                                                </motion.p>
                                            </div>
                                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                                <motion.h2
                                                    className="title-font font-extrabold text-white tracking-widest text-sm"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ delay: 0.5, duration: 0.5 }}
                                                >
                                                    EMAIL
                                                </motion.h2>
                                                <a className="text-white leading-relaxed">hr.syncsolutions@gmail.com</a>
                                                <motion.h2
                                                    className="title-font font-extrabold text-white tracking-widest text-sm mt-4"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ delay: 0.7, duration: 0.5 }}
                                                >
                                                    PHONE
                                                </motion.h2>
                                                <motion.p
                                                    className="leading-relaxed text-white"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ delay: 0.9, duration: 0.5 }}
                                                >
                                                    123-456-7890
                                                </motion.p>
                                            </div>
                                        </motion.div>

                                    </motion.div>
        
                                    <motion.div
                                        className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
                                        initial={{ x: 100 }}
                                        animate={{ x: 0 }}
                                        transition={{ duration: 1 }}
                                        whileHover={{ scale: 1.05 }}  // Apply hover effect
                                    >
                                        <motion.h2
                                            className="text-black text-3xl mb-1 font-bold title-font hover:text-primary"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 1, duration: 0.5 }}
                                        >
                                            Drop a message
                                        </motion.h2>
        
                                        <div className="relative mb-4">
                                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                            <motion.input
                                                type="text"
                                                id="name"
                                                name="name"
                                                // value={formData.name}
                                                // onChange={handleChange}
                                                value={formValues.name}
                                                onChange={handleInputChange}
                                                className="w-full bg-white rounded border border-primary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 1.5, duration: 0.5 }}
                                                whileHover={{ scale: 1.05 }}  // Apply hover effect
                                            />
                                            <ValidationError
                                                prefix="Name"
                                                field="name"
                                                errors={state.errors}
                                            />
                                        </div>
                                        <div className="relative mb-4">
                                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                            <motion.input
                                                // type="email"
                                                // id="email"
                                                // name="email"
                                                id="email"
                                                type="email"
                                                name="email"
                                                value={formValues.email}
                                                onChange={handleInputChange}
                                                // value={formData.email}
                                                // onChange={handleChange}
                                                className="w-full bg-white rounded border border-primary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 1.7, duration: 0.5 }}
                                                whileHover={{ scale: 1.05 }}  // Apply hover effect
                                            />
                                            <ValidationError
                                                prefix="Email"
                                                field="email"
                                                errors={state.errors}
                                            />
                                        </div>
                                        <div className="relative mb-4">
                                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Phone No.</label>
                                            <motion.input
                                                // type="email"
                                                // id="email"
                                                // name="email"
                                                id="phone_no"
                                                type="text"
                                                name="phone_no"
                                                value={formValues.phone_no}
                                                onChange={handleInputChange}
                                                // value={formData.email}
                                                // onChange={handleChange}
                                                className="w-full bg-white rounded border border-primary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 1.7, duration: 0.5 }}
                                                whileHover={{ scale: 1.05 }}  // Apply hover effect
                                            />
                                            <ValidationError
                                                prefix="Phone_no"
                                                field="phone_no"
                                                errors={state.errors}
                                            />
                                        </div>
                                        <div className="relative mb-4">
                                            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                                            <motion.textarea
                                                // id="message"
                                                // name="message"
                                                id="message"
                                                name="message"
                                                value={formValues.message}
                                                onChange={handleInputChange}
                                                // value={formData.message}
                                                // onChange={handleChange}
                                                className="w-full bg-white rounded border border-primary h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 1.9, duration: 0.5 }}
                                                whileHover={{ scale: 1.05 }}  // Apply hover effect
                                            ></motion.textarea>
                                            <ValidationError
                                                prefix="Message"
                                                field="message"
                                                errors={state.errors}
                                            />
                                        </div>
                                        <motion.button
                                            type="submit"
                                            disabled={state.submitting}
                                            className="text-white bg-pink-400 border-0 py-2 px-6 focus:outline-none hover:bg-primary rounded text-lg"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            Submit
                                        </motion.button>
                                    </motion.div>
                                </div>
                            </motion.section>
                        </form>

        
      </motion.div>
    </section>
  );
};

export default ContactUs;
