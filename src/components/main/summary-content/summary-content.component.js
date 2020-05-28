import React from 'react'
import './summary-content.styles.scss'
export default function SummaryContent(props) {
    return (
        <div class="summary__content">
            {console.log('summary__content dataObject',props )}
            <h1 class="summary__content-title">{props.title}</h1>
            <p class="summary__content-description">{props.description}</p>
        </div>
    )
}
