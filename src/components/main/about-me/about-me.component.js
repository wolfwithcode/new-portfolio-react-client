import React from 'react'
import AboutDetailItem from '../about-detail-item/about-detail-item.component'
import SummaryContent from '../summary-content/summary-content.component'
export default function AboutMe() {
    return (
        <section className="about-me">
            <div className="container">
                <div className="row">
                    <div className="col"><img className="about-me__avatar img-fluid" src="img/doraemon.jpg"/></div>
                    <div className="col">
                        <div className="container">
                            <div className="row">
                                {/* <div class="about-me__content">
                                    <h2 class="about-me__title">ABOUT ME</h2>
                                    <p class="about-me__description">Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit am Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit am Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit am </p>
                                </div> */}
                                <SummaryContent title={"ABOUT ME"} description={"Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit am Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit am Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit am"}/>
                            </div>
                            <div className="row">        
                                <div className="col-md-6">
                                    <AboutDetailItem title={"WEB DESIGN"} description={"Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet."}/>
                                </div>                                
                            </div>                   
                        </div>
                    </div>
                </div>
            </div>            
      </section>      
    )
}
