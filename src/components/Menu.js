import {React, useState} from 'react';
import styled from 'styled-components'
import MenuButton from './MenuButton'

const StyledMenu = styled.div`
    display: ${({ open }) => open ? 'flex' : 'none'};
    width: 500px;
    height: 40px;

`
const Menu = ({open, setIsSent}) => { 
  return (
    <StyledMenu open={open}>
        <MenuButton href="#about-me" text="About me"/>
        <MenuButton href="#projects-header" text="Projects"/>
        <MenuButton onClick={()=>{setIsSent(true)}} href="#contact" text="Contact" />
    </StyledMenu>
  )
}
export default Menu;