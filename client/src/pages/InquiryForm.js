import React, { useState } from 'react'
import classes from './InquiryForm.module.css';
const InquiryForm = () => {


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [formInvalid, setFormInvalid] = useState(false)
    const formSubmitHandler = (e) => {
        setFormInvalid(false)
        e.preventDefault()
        if (!name || !email || !message) {
            setFormInvalid(true)
            return
        }
        console.log(name, email, message)
    }

    return (
        <div className={classes.mainContainer}>
            <div className={classes.formContainer}>
                {formInvalid && <p className={classes.error}>Please fill all the fields</p>}
                <form onSubmit={formSubmitHandler}>
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" name="fullname" placeholder="Your name" className={classes.textInput} onChange={(e) => setName(e.target.value)} value={name} />
                    <label htmlFor="lname">Email</label>
                    <input type="text" id="email" name="email" placeholder="Your Email" className={classes.textInput} onChange={(e) => setEmail(e.target.value)} value={email} />
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" className={classes.textInput} placeholder='Your Message' onChange={(e) => setMessage(e.target.value)} value={message} />
                    <input type="submit" value="Submit" className={classes.submitButton} />
                </form>
            </div>
        </div>
    )
}

export default InquiryForm