import React, { useEffect, useState } from 'react';
import { FormButton } from '../components/buttons/buttons';
import { callApi } from '../services/ApiService';
import Spinner from '../assets/spinner.svg';

export default function Contact() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [alertMessages, setAlertMessages] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const handleSubmit = async e => {
        e.preventDefault();

        setLoading(true);
        setAlertMessages([]);

        let messages = [];

        if(!fullName || fullName.trim().length === 0) {
            messages.push('Full name field is required.');
        }
        
        if(!email || email.trim().length === 0)
            messages.push('Email field is required.');
        else if(!emailValidation(email))
            messages.push('Email is invalid. Enter a valid email.');
        
        if (!subject || subject.trim().length === 0)
            messages.push('Subject field is required.');
        
        if (!message || message.trim().length === 0)
            messages.push('Message field is required.');

        if (messages.length === 0) {
            const data = {
                'name': fullName,
                'email': email,
                'subject': subject,
                'message': message
            };

            const result = await callApi(data);

            if (result.ok) {
                messages.push('Form sent successfully! 🎉');
                messages.push(true);

                setFullName('');
                setEmail('');
                setSubject('');
                setMessage('');
            } else {
                messages.push('An error has ocurred. Try again.');
                messages.push(false);
            }
        }
        else
            messages.push(false);
        setAlertMessages(messages);
        setLoading(false);
    }

    const emailValidation = (email) => {
        return /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

    const hideAlert = (index) => {
        let errors = [...alertMessages];
        errors.splice(index, 1);
        setAlertMessages(errors);
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
                        alertMessages.length > 0 ? <Alerts messages={alertMessages} hideAlert={hideAlert} /> : null
                    }
                    {
                        !isLoading ? <FormButton buttonName='Submit' /> : 
                        (<div className='form-loadingWrapper'>
                            <img className='form__spinner' src={Spinner} alt='Loading animation' />
                        </div>)
                    }
                </form>
            </article>
        </div>
    );
}

function Alerts({ messages, hideAlert }) {
    const [alertType, setAlertType] = useState();

    useEffect(() => {
        setAlertType(messages[messages.length - 1]);
    }, [messages])

    return <>
        {
            messages.map((message, index) => {
                if (index < messages.length - 1) {
                    return (
                        <div className={`alert alert--${alertType ? `success` : `danger`} slide-in-top`} key={index.toString()}>
                            <span className='alert__closeBtn' onClick={() => hideAlert(index) }>&times;</span>
                            {message}
                        </div>
                    )
                }
                else
                    return null
            })
        }
    </>;
}