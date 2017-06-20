import React, {Component, PropTypes} from 'react';
import {Row, Col, Button} from 'react-materialize';

export default class Sections extends Component {
    render() {
        let sections = this.props.sections.map((section, index) => {
            let description = <Col s={12} m={6} className={section.descriptionClass} dangerouslySetInnerHTML={{
                __html: section.description
            }}/>,
                image = <Col s={12} m={6}>
                    <img src={section.image.src} srcSet={section.image.srcSet} width="100%"/>
                </Col>,
                screenWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
            return (
                <Col key={index} style={section.style}>
                    <Row>
                        {/* if index is even print image in the left
                            else print image at the right */}
                        {(index % 2 == 0 || screenWidth < 601)
                            ? <span className="valign-wrapper-m">{image}{description}</span>
                            : <span className="valign-wrapper-m">{description}{image}</span>}
                    </Row>
                </Col>
            )
        });

        return (
            <Row>
                {sections}
            </Row>
        );
    }
}
