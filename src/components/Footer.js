import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`

color: white;
background: lightblack;
height: 80px;
width: 100%;
display: flex;
align-items: center;
justify-content: center;

a:hover {
    color: #ffa001;
    cursor: pointer;
}

.email-icon {
    cursor: pointer;
    background: white;
}

.email-icon:hover {
    transform: rotate(5deg);
}
`

const Footer = ({isSent, setIsSent}) => {
    return (
        <StyledFooter id="contact">
            <svg onClick={()=>{setIsSent(!isSent)}} className="email-icon"xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
        </StyledFooter>
    )
}

export default Footer
