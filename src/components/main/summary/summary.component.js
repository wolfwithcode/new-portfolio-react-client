import React, { Component } from 'react'
import SummaryContent from '../summary-content/summary-content.component'
import './summary.styles.scss'

export default class Summary extends Component {
    constructor(){
        super();
        this.state = {
            summary_content_data: [
                {
                    title: 'VALUES', 
                    description:'Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit am'
                },
                {
                    title: 'GOALS', 
                    description:'Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit am'
                },
                {
                    title: 'HOBBIES', 
                    description:'Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit am'
                }
            ]

            
        }
    }
    render() {
        return (
        <section class="summary">
            <div class="container">
            <div class="row">
                {
                    this.state.summary_content_data.map( (dataObject,index) => (                        
                        <div class="col-md-4" key={index}>  
                            {console.log('dataObject ',dataObject)}
                            <SummaryContent dataObject={dataObject}/>
                        </div>  
                    ))
                }
                                             
            </div>
            </div>
        </section>
        )
    }
}
