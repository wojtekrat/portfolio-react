import React from 'react'

const SkillBar = ({name, percent}) => {
    return (
        <div>
            <dt class="skill-name">{name}</dt>
            <dd class="skill-percent" data-percent={percent}></dd>
        </div>
    )
}

export default SkillBar
