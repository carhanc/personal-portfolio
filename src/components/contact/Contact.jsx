import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsDiscord} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dt28wtj', 'template_v5vs69l', form.current, '9BB1isHFyvcHNziLb')

    e.target.reset()
  };

  return (
    <div id = 'contact' className='contact-mt'>
    <section id = 'contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>arhanc360@gmail.com</h5>
            <a href="mailto:arhanc360@gmail.com" target='_blank' className='btn'>Send a message</a>
          </article>

          <article className="contact__option">
            <BsDiscord className='contact__option-icon'/>
            <h4>Discord</h4>
            <h5>arhanc360#0882</h5>
            <a href="https:discord.com" target='_blank' className='btn'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text"  name='name' placeholder='Full Name...' required className='form__text-size'/>
          <input type="email" name='email' placeholder='Email...' required className='form__text-size'/>
          <textarea name="message" rows="7" placeholder='Message...' required className='form__text-size'/>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
    </div>
  )
}

export default Contact