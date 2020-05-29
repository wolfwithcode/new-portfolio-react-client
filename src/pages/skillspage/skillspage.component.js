import React, { Component } from 'react'
import SkillContent from '../../components/main/skills-content/skills-content.component'
import './skillspage.styles.scss'
export default class SkillsPage extends Component {
    constructor(){
        super();
        this.state = {
            my_skill_summary_data : "Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Proin gravida nibh vel velit auctor aliquet. Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Proin gravida nibh vel velit auctor aliquet. Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.",
            my_skill_items_data: [
                {
                    title: 'PHOTOSHOP',
                    mark: '90'
                },
                {
                    title: 'ILLUSTRATOR',
                    mark: '80'
                },
                {
                    title: 'HTML/CSS',
                    mark: '90'
                },
                {
                    title: 'PHP/MYSQL',
                    mark: '70'
                }
            ]
        }
    }
    render(){
        return (
            <section className="my-skills">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="my-skills__content">
                                <h3 className="my-skills__title">MY SKILLS</h3>
                                <p className="my-skills__description">{this.state.my_skill_summary_data}</p>
                                <button className="btn btn-success" type="button">Contact me</button>
                            </div>
                        </div>
                        <div className="col">
                            <div className="container">    
                                {
                                    this.state.my_skill_items_data.map((dataObject, index) => (
                                        <SkillContent {...dataObject}/>
                                    ))
                                } 
                                                            
                            </div>
                        </div>
                    </div>
                </div>
          </section>
        )
    }    
}
