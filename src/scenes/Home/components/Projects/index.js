import React, {Component, PropTypes} from 'react';
import {Row} from 'react-materialize';
import ProjectItem from './components/ProjectItem';

export default class Projects extends Component {
    render() {
        let projects = this.props.projects.map((project, index) => {
            return (<ProjectItem project={project} key={index}/>)
        });

        return (
            <Row id="portfolio">
                <div className=" p100 p40s">
                    <h4>
                        <b>Projects</b>
                    </h4>
                    <hr/>

                </div>
                {projects}
            </Row>
        )
    }
}
