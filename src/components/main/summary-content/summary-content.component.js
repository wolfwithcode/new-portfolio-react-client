import React from 'react'
import './summary-content.styles.scss'
export default function SummaryContent(props) {
    return (
        <div className="summary__content">
            {console.log('summary__content dataObject',props )}
            <h1 className="summary__content-title">{props.title}</h1>
            <p className="summary__content-description">{props.description}</p>
        </div>
    )
}
