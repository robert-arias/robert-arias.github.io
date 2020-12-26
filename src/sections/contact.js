import React, { useEffect, useState } from 'react';
import { FormButton } from '../components/buttons/buttons';
import Footer from '../components/footer/footer';
import { callApi } from '../services/ApiService';
import Spinner from '../assets/spinner.svg';
import { useTranslation } from 'react-i18next';

export default function Contact() {
    const { t } = useTranslation(['resume', 'messages']);

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

        if(!fullName || fullName.trim().length === 0)
            messages.push(t('messages:efn'));
        
        if(!email || email.trim().length === 0)
            messages.push(t('messages:eem'));
        else if(!emailValidation(email))
            messages.push(t('messages:eei'));
        
        if (!subject || subject.trim().length === 0)
            messages.push(t('messages:esj'));
        
        if (!message || message.trim().length === 0)
            messages.push(t('messages:ems'));

        if (messages.length === 0) {
            const data = {
                'name': fullName,
                'email': email,
                'subject': subject,
                'message': message
            };

            const result = await callApi(data);

            if (result.ok) {
                messages.push(t('messages:sfs'));
                messages.push(true);

                setFullName('');
                setEmail('');
                setSubject('');
                setMessage('');
            } else {
                messages.push(t('messages:euk'));
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
                <h3 className='title title--mini'>{t('contact:sectionName')}</h3>
                <h2 className='title title--big'>{t('contact:title')}</h2>
                <p className='paragraph'>{t('contact:description')}</p>
                <form className='form' id='contactForm' onSubmit={handleSubmit}>
                    <div className='form-container'>
                        <input className='form__input' type='text' value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder={t('contact:fn')} />
                        <label className='form__label' htmlFor='name'>{t('contact:fn')}</label>
                    </div>
                    <div className='form-container'>
                        <input className='form__input' type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t('contact:em')} />
                        <label className='form__label' htmlFor='email'>{t('contact:em')}</label>
                    </div>
                    <div className='form-container'>
                        <input className='form__input' type='text' value={subject} onChange={(e) => setSubject(e.target.value)} placeholder={t('contact:sj')} />
                        <label className='form__label' htmlFor='subject'>{t('contact:sj')}</label>
                    </div>
                    <div className='form-container'>
                        <textarea className='form__input form__input--message' rows='10' cols='40' placeholder={t('contact:ms')} value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                        <label className='form__label form__label--message' htmlFor='message'>{t('contact:ms')}</label>
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
            <Footer />
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