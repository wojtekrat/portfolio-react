import React from 'react'
import styled from 'styled-components';

const StyledIcon = styled.div`
    svg {
        margin-right: 15px;
    }

    svg:hover {
        transform: rotate(10deg);
        cursor: pointer;
    }
`;

const SocialIcon = ({href, path}) => {
    return (
        <StyledIcon>
            <a href={href}>
                <svg className="icon" xmlns="http://www.w3.org/2000/svg" fill= '#ffffff' width="50" height="50" viewBox="0 0 24 24"><path d={path}/></svg>
            </a>
        </StyledIcon>
    )
}

export default SocialIcon
