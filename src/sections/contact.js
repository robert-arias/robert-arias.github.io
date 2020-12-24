import React, { useState } from 'react';
import { FormButton } from '../components/buttons/buttons';

export default function Contact() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessages, setErrorMessages] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        let errors = [];

        if(!fullName) {
            errors.push('Full name field is required.');
        }
        
        if(!email)
            errors.push('Email field is required.');
        else if(!emailValidation(email))
            errors.push('Email is invalid. Enter a valid email.');
        
        if (!subject)
            errors.push('Subject field is required.');
        
        if (!message)
            errors.push('Message field is required.');

        if (errors.length === 0) {
            console.log('no errors')
        }
        console.log(errors);
        setErrorMessages(errors);
    }

    const emailValidation = (email) => {
        return /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

    const hideAlert = (index) => {
        let errors = [...errorMessages];
        errors.splice(index, 1);
        setErrorMessages(errors);
    }

    return (
        <div className='wrapper'>
            <article className='contact' id='contact'>
                <h3 className='title title--mini'>Contact me</h3>
                <h2 className='title title--big'>I'd love to hear from you.</h2>
                <p className='paragraph'>
                    Thank you very much for checking my portfolio out 🥳! If you are interested in contacting me, you can do so through my social media, by email, or phone number. You can also send me a message if you fill out the form below.
                </p>
                <form className='form' id='contactForm' onSubmit={handleSubmit}>
                    <div className='form-container'>
                        <input className='form__input' type='text' value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder='Full name' />
                        <label className='form__label' htmlFor='name'>Full name</label>
                    </div>
                    <div className='form-container'>
                        <input className='form__input' type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
                        <label className='form__label' htmlFor='email'>Email</label>
                    </div>
                    <div className='form-container'>
                        <input className='form__input' type='text' value={subject} onChange={(e) => setSubject(e.target.value)} placeholder='Subject' />
                        <label className='form__label' htmlFor='subject'>Subject</label>
                    </div>
                    <div className='form-container'>
                        <textarea className='form__input form__input--message' rows='10' cols='40' placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                        <label className='form__label form__label--message' htmlFor='message'>Message</label>
                    </div>
                    {
                        errorMessages.length > 0 ? <ErrorAlerts errorMessages={errorMessages} hideAlert={hideAlert} /> : null
                    }
                    <FormButton buttonName='Submit' />
                </form>
            </article>
        </div>
    );
}

function ErrorAlerts({ errorMessages, hideAlert }) {
    return <>
        {
            errorMessages.map((error, index) => {
                return (
                    <div className='alert' key={index.toString()}>
                        <span className='alert__closeBtn' onClick={() => hideAlert(index) }>&times;</span>
                        {error}
                    </div>
                )
            })
        }
    </>;
}