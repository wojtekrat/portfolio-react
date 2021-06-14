import React from 'react'
import styled from 'styled-components'
import myphoto from '../images/me.jpg'

const StyledAboutMe = styled.div`
display: grid;
grid-template-areas: 'textArea imageArea';
color: white;
padding: 30px;
margin: 30px auto;
background: #00b49d;
border: 5px solid #ffa001 ;
width: 66%;
border-radius: 20px;
box-shadow: 5px 5px 20px #00b49d;
opacity: 0.8;

img {
    width: 200px;
    border-radius: 150px;
    margin: 20px;
    border: 5px white solid;
}
`

const AboutMeSection = () => {
    return (
        <StyledAboutMe id="about-me">
            <div className="about-me-text">
                <h2>About me</h2>
                Hello, I'm Wojtek Ratajczak.<br/> I am self taught beginner web developer from Wroclaw, Poland.<br/> I make websites and web applications usually with JavaScript and React.js
            </div>
            <div className="about-me-image">
                <img src={myphoto} alt="my headshot"/>
            </div>
        </StyledAboutMe>
    )
}

export default AboutMeSection
