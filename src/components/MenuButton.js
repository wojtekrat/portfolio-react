import React from 'react'
import styled from 'styled-components'

const StyledMenuButton = styled.div`
    font-size: 22px;
    margin: 15px;

    a {
        text-decoration: none;
        color: white;
        cursor: pointer;
    }
    
    a:hover {
        color: #fc7400;
    }
`

const MenuButton = ({href, text}) => {
    return (
        <StyledMenuButton>
            <a href={href}>{text}</a>
        </StyledMenuButton>
            
    )
}

export default MenuButton
