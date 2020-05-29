import React from 'react'
import './skills-content.styles.scss'
export default function SkillContent(props) {
    return (
        <div className="my-skills__skill-content">
            <p className="my-skills__title">{props.title}</p>
            <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"  style={{width: props.mark+'%'}}>
                    {props.mark}
                </div>
            </div>
        </div>                         
    )
}
