import React from 'react'
import emailjs from 'emailjs-com'
import styled from 'styled-components'

const StyledContactSection = styled.div`
display: grid;
justify-content: center;
color: white;
width: 300px;
border-radius: 20px;
  margin: 10px auto;   
  padding: 30px;
  background: linear-gradient(#fc7400, #ffa001, #00b49d, #007563, black);
  border: 2px solid #ffa001;
  color: white;
  box-shadow: 5px 5px 20px #00b49d;

    div {
        padding: 5px;
        display: flex;
        flex-direction: column; 
        align-items: center;
        justify-content: center;
    }

    h2 {
        color: white;
        font-size: 30px;
    }

    input {
        color: #ffa001;
        width: 300px;
    }

    textarea {
        height: 200px;
        resize: none;   
        width: 300px;
    }
    .close-contact a{
        cursor: pointer;    
    }
`

const ContactSection = ({setIsSent}) => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_hu0gre8', 'template_vg1ocdd', e.target, 'user_vBv77OvQZ0xnE7SqbMDZf')
        .then((result) => {
            alert(result.text);
            setIsSent(false)
        }, (error) => {
            alert(error.text);
        });
        e.target.reset()
    }
    return (
        <StyledContactSection>
            <div className="close-contact"><a onClick={()=>{setIsSent(false)}}>X</a></div>
            <div>
                <h2>Send me a message</h2>
            </div>
                <div className="contact-form">
                    <form onSubmit={sendEmail}>
                    <div>
                        <label>Subject:</label>
                        <input type="text" name="subject" />
                        <label>Message: </label>
                        <textarea name="message" />
                    </div>
                    <div>
                        <label>Name:</label>
                        <input type="text" name="name" />
                        <label>Email:</label>
                        <input type="email" name="email" />
                        <input className="contact-form-button" type="submit" value="Send" />
                    </div>
                </form>
            </div>
        </StyledContactSection>
    )
}

export default ContactSection
