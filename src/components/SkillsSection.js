import React from 'react'
import SkillBar from './SkillBar'
import styled from 'styled-components'

const StyledSkillsSection = styled.div`
padding: 30px;
margin: 30px;
color: white;
font-size: 20px;
border: 5px solid #ffa001;
background: linear-gradient(-45deg, #fc7400, #ffa001, #00b49d, #007563);
border-radius: 20px;
`

const SkillsSection = () => {
    return (
        <StyledSkillsSection className="section-container">
        <div><h2>My skills</h2></div>
        <div class="container-fluid" id="skills">
            <div class="row">
                <div class="skills-text">
                    <dl class="skills-list">
                        <SkillBar name="HTML" percent="95%"/>
                        <SkillBar name="CSS" percent="95%"/>
                        <SkillBar name="JQUERY" percent="50%"/>
                        <SkillBar name="SCSS" percent="45%"/>
                        <SkillBar name="JavaScript" percent="70%"/>
                        <SkillBar name="React.js" percent="60%"/>
                        <SkillBar name="Python" percent="50%"/>
                    </dl>
                </div>
            </div>
        </div>
        </StyledSkillsSection>
    )
}

export default SkillsSection
