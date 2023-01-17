import React from 'react';
import { useState } from 'react';
import { Accordion, Form, Button } from 'react-bootstrap';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
import AccordionItem from 'react-bootstrap/esm/AccordionItem';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import '../styles/contact.css';

function Contact() {
    const [questions, setQuestion] = useState([
        {
            question: "Question 1",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
        },
        {
            question: "Question 2",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
        },
        {
            question: "Question 3",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
        },
        {
            question: "Question 4",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
        },
    ])

    const [contactInfo, setContactInfo] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        setContactInfo({
            name: "",
            email: "",
            subject: "",
            message: ""
        })
    }

    const handleChange = (e) => {
        setContactInfo({...contactInfo, [e.target.name] : e.target.value})
    }

  return (
    <div className='contact'>
        <div className='contact-faq-container'>
            <h1>Do you have any of these questions?</h1>
            {questions.map(function(question, index){
                return (
                <Accordion className="contact-accordion">
                    <Accordion.Item eventKey={index}>
                        <Accordion.Header>{ question.question }</Accordion.Header>
                        <Accordion.Body>{question.answer}</Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                )
            })}
        </div>
        <div className='contact-container'>
            <h2>Your question is not in the FAQ?</h2>
            <h3>Contact us!</h3>
            <div className='contact-us-info-container'>
                <Form className='contact-us-container' onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="text" placeholder="Name" name='name' value={contactInfo.name} onChange={(e) => handleChange(e)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="text" placeholder="Email" name='email' value={contactInfo.email} onChange={(e) => handleChange(e)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="text" placeholder="Subject" name='subject' value={contactInfo.subject} onChange={(e) => handleChange(e)} />
                    </Form.Group>
                    <Form.Group className="mb-3 message" controlId="formBasicName">
                        <Form.Label>Message</Form.Label>
                        <Form.Control type="text" as="textarea" style={{ height: "150px" }} placeholder="Enter your message" name='message' value={contactInfo.message} onChange={(e) => handleChange(e)} />
                    </Form.Group>
                    <Button variant="outline-secondary" type="submit">
                        Send Message
                    </Button>
                </Form>
                <div class="direct-contact-container">

                    <ul class="contact-list">
                        <li class="list-item"><i class="fa fa-map-marker fa-2x"><span class="contact-text place">Ankara, Turkey</span></i></li>
                        
                        <li class="list-item"><i class="fa fa-phone fa-2x"><span class="contact-text phone"><a href="tel:90-507-682-3069" title="Give me a call">(507) 682-3069</a></span></i></li>
                        
                        <li class="list-item"><i class="fa fa-envelope fa-2x"><span class="contact-text gmail"><a href="mailto:#" title="Send me an email">abdeendunz@gmail.com</a></span></i></li>
                        
                    </ul>
                    <ul class="social-media-list">
                        <li><a href="#" target="_blank" class="contact-icon">
                            <i class="fa" aria-hidden="true"><BsFacebook /></i></a>
                        </li>
                        <li><a href="#" target="_blank" class="contact-icon">
                            <i class="fa" aria-hidden="true"><BsInstagram /></i></a>
                        </li>       
                    </ul>

                    <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>

                    </div>
                </div>
            </div>
        </div>
  )
}

export default Contact