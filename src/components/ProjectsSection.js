import React from 'react'
import styled from 'styled-components'
import ProjectCard from './ProjectCard'
import {useState, useEffect} from 'react'

const StyledProjectContainer = styled.div`
display: grid;
justify-content: center;
color: white;
margin: 30px;   
padding: 30px;
border: 5px solid linear-gradient(#fc7400, #ffa001, #00b49d, #007563);

`

const StyledProjectSection = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column wrap;

    
`

const ProjectsSection = () => {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        const getProjects = async () => {
          const projectsFromServer = await fetchProjects()
          setProjects(projectsFromServer)
      }
  
      getProjects()
    }, [])
       
    const fetchProjects = async () => {
        const res = await fetch('http://localhost:5000/projects/')
        const data = await res.json()
        return data
    }
    
    return (
        <StyledProjectContainer>
            <div id="projects-header"><h2>Projects</h2></div>
            <StyledProjectSection id="project-container">
                {projects.map((project, index) => (
                <ProjectCard key={index} project={project}
                />
            ))}
            </StyledProjectSection>
        </StyledProjectContainer>
    )
}

export default ProjectsSection
