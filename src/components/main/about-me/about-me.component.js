import React, { Component } from 'react'
import AboutDetailItem from '../about-detail-item/about-detail-item.component'
import SummaryContent from '../summary-content/summary-content.component'


import './about-me.styles.scss'
export default class AboutMe extends Component {
    constructor(){
        super();
        this.state = {
            summary_content_data: {
                title: "ABOUT ME",
                description: "Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit am Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit am Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit am"                
            },
            about_detail_items: [
                {
                    title: "WEB DESIGN",
                    description: "Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.",
                    icon: "img/icon1.png"                
                },
                {
                    title: "GRAPHIC DESIGN",
                    description: "Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.",
                    icon: "img/icon2.png"         
                },
                {
                    title: "ONLINE MARKETING",
                    description: "Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.",
                    icon: "img/icon3.png"          
                },
                {
                    title: "SEO",
                    description: "Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.",
                    icon: "img/icon4.png"          
                }
            ]
        }
    }
    render() {
        return (
            <section className="about-me">
                <div className="container-fuild">
                    <div className="row">
                        <div className="col-md-4"><img className="about-me__avatar img-fluid float-right" src="img/doraemon.jpg"/></div>
                        <div className="col-md-8">
                            <div className="container">
                                <div className="row">                                    
                                    <SummaryContent {...this.state.summary_content_data}/>
                                </div>
                                <div className="row">     
                                    {
                                        this.state.about_detail_items.map((dataObject, index) =>
                                            (
                                            <div className="col-md-6" key={index}>                                       
                                                <AboutDetailItem {...dataObject}/>
                                            </div>
                                            )
                                        )
                                    }   
                                                                    
                                </div>                   
                            </div>
                        </div>
                    </div>
                </div>            
            </section>      
        )
    }
}


// export default function AboutMe2() {
//     return (
//         <section className="about-me">
//             <div className="container">
//                 <div className="row">
//                     <div className="col"><img className="about-me__avatar img-fluid" src="img/doraemon.jpg"/></div>
//                     <div className="col">
//                         <div className="container">
//                             <div className="row">
//                                 {/* <div class="about-me__content">
//                                     <h2 class="about-me__title">ABOUT ME</h2>
//                                     <p class="about-me__description">Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit am Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit am Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit am </p>
//                                 </div> */}
//                                 <SummaryContent title={"ABOUT ME"} description={"Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit am Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit am Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit am"}/>
//                             </div>
//                             <div className="row">        
//                                 <div className="col-md-6">
//                                     <AboutDetailItem title={"WEB DESIGN"} description={"Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet."}/>
//                                 </div>                                
//                             </div>                   
//                         </div>
//                     </div>
//                 </div>
//             </div>            
//       </section>      
//     )
// }
