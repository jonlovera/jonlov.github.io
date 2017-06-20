import React, {Component, PropTypes} from 'react';
import {Row, Col, Button} from 'react-materialize';
import Scrollchor from 'react-scrollchor';

import {Track} from 'react-track';
import {tween} from 'react-imation';
import Skills from './components/Skills';
import Sections from './components/Sections';

export default class Contact extends Component {
    render() {
        let info = this.props.info;
        return (
            <Track component="div" className="row p100 p40s justify" formulas={[this.props.start, this.props.end]}>
                {(Span, start, end) => (
                    <Span style={tween(this.props.scrollY+150, [
                        [
                            start, {
                                opacity: 0
                            }
                        ],
                        [
                            end, {
                                opacity: 1
                            }
                        ]
                    ])}>
                        <Col s={12} className="center-align">
                            <span dangerouslySetInnerHTML={{
                                __html: info.description
                            }}></span>
                                <br />
                                <br />
                                <br />
                                <br />
                        </Col>

                        <Col s={12} l={7}>
                            <Skills skills={info.skills}/>
                        </Col>

                        <Col s={12} l={5} className="center-align" style={{marginBottom:'50px'}}>
                            <img {...info.getAvatar()}/>
                        </Col>

                        <Sections sections={info.sections} />

                        <Col s={12} className="center-align">
                        <br/>
                        <hr/>
                        <br/>
                        <br/>
                            <span dangerouslySetInnerHTML={{
                                __html: info.pitchs[0]
                            }}></span>
                            <br/>
                            <br/>
                            <Scrollchor to="#contact">
                                <Button className="blue" large>Contact me!</Button>
                            </Scrollchor>
                        </Col>
                    </Span>
                )}
            </Track>
        )
    }
}
