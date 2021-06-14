import React, {useState} from 'react';
import styled from 'styled-components';

const StyledBurger = styled.div`
padding: 20px;
width: 20px;
height: 20px;
display: flex;
justify-content: space-around;
flex-flow: column nowrap;
cursor: pointer;

  div {
      width: 20px;
      height: 3px;
      background-color: white;
      border-radius: 10px;
      transform-origin: 1px;
      transition: all 0.3s;

      &:nth-child(1) {
          transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
      }

      &:nth-child(2) {
        transform: ${({open}) => open ? 'translateX(100%)' : 'translateX(0)'};
        opacity: ${({open}) => open ? 0 : 1};
      }

      &:nth-child(3) {
        transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
  `;


const Hamburger = ({open, setOpen}) => {
  return (
      <>
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
    
    </>
    
  )
}


export default Hamburger;