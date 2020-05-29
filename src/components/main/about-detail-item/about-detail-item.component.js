import React from 'react'

export default function AboutDetailItem(props) {
    return (
            <div className="about-me__about-detail">             
                <div className="row">
                    <div className="col-md-2"><img className="about-me__icon" src="img/icon1.png"/></div>
                    <div className="col-md-8">
                        <h4 className="about-me__about-detail-title">{props.title}</h4>
                        <p className="summary__about-detail-description">{props.description}</p>
                    </div>   
                </div>                                             
            </div> 
    )
}
