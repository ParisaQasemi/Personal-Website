import React, { useState } from 'react';
import styles from './Form.module.css';

export const Form = () => {

    //useState hook for formData managment
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: ''
    });

    //useState hook for handle errors
    const [errors, setErrors] = useState({})

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name] : value
        })
    }
    
    const handleSubmit = (e) => {
        
        //Prevent from default action of submit button
        e.preventDefault();

        //Define validation errors 
        const validationErrors = {}

        //Validation for full name
        if(!formData.fullName.trim()) {
            validationErrors.fullName = 'Name is required'
        }

        //Validation for correct email address
        if(!formData.email.trim()) {
            validationErrors.email = 'Email is required'
        } else if(!/\S+@\S+\.\S+/.test(formData.email)){
            validationErrors.email = 'Email is not valid'
        }

        //Validation for message
        if(!formData.message.trim()) {
            validationErrors.message = 'Message is required'
        }
        
        setErrors(validationErrors)
        
        //If form doesn't have errors
        if(Object.keys(validationErrors).length === 0) {
            alert('Form Submitted successfully')
            //Clear inputs after successful submit
            setFormData({
                fullName: '',
                email: '',
                message: ''
            });
        }
    }
    
  return (
    <form onSubmit={handleSubmit} className={styles.container} id='form'>
    {/* Form title */}
    <h2 className={styles.title}>Contact Form</h2>

    <div className={styles.content}>
        <div className={styles.FormItemDiv}>
            <div className={styles.FormItems}>
                {/* fullName input field */}
                <label>Full Name:</label>
                <input
                    type="text"
                    name='fullName'
                    value={formData.fullName}
                    placeholder='Name'
                    autoComplete='off'
                    onChange={handleChange}
                />
                {/* Error message for fullName field */}
                {errors.fullName && <span>{errors.fullName}</span>}
            </div>

            <div className={styles.FormItems} >
                {/* Email input field */}
                <label>Email:</label>
                <input 
                    type="email"
                    name='email'
                    value={formData.email}
                    placeholder='example@gmail.com'
                    autoComplete='off'
                    onChange={handleChange}/>
                {/* Error message for email field */}
                {errors.email && <span>{errors.email}</span>}
            </div>
        </div>
        <div className={styles.FormItems} >
                {/* Message input field */}
                <label>Message:</label>
                <textarea
                    name='message'
                    value={formData.message}
                    placeholder='Your Message'
                    onChange={handleChange}
                    />
                {/* Error message for message field */}
                {errors.message && <span>{errors.message}</span>}
            </div>
    </div>

    {/* Submit button */}
    <button type='submit' className={styles.Submit}>Submit</button>
    </form>

  );
};
