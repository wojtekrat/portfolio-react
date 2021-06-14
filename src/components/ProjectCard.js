import React from 'react'
import styled from 'styled-components'

const StyledProjectCard = styled.div`
    width: 300px;
    height: 440px;
    box-shadow: 5px 5px 20px #00b49d;
    margin: 10px;
    color: white;
    border: 3px solid #ffa001;
    background: linear-gradient(#fc7400, #ffa001, #00b49d, #007563, black);
    border-radius: 15px;   

    h3 {
        color: #ffa001;
    }
    img {
        width: 250px;
        height: 220px;
        margin-top: 10px;
        border-radius: 20px;
    }

    p {
        color: white;
        font-size: 15px;
        font-weight: 300;
    }

    a {
        padding: 3px;
        color: white;
    }
    a:hover {
        color: #ffa001;
        cursor: pointer;
        opacity: 0.8;
    }
`

const ProjectCard = ({project}) => {
    return (
        <StyledProjectCard>
          <img src={project.img} alt="picture 1"/>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <hr/>
          <p><a href={project.link}>View here</a></p>
        </StyledProjectCard>
    )
}

export default ProjectCard
