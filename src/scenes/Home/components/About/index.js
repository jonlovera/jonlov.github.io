import React, {Component, PropTypes} from 'react';
import {Row, Col, Button} from 'react-materialize';

import {Track} from 'react-track';
import {tween} from 'react-imation';
import Skills from './components/Skills';

export default class Contact extends Component {
    render() {
        let info = this.props.info;
        return (
            <Track component="div" className="row p100 p40s justify" formulas={[this.props.topBottom, this.props.centerCenter]}>
                {(Span, posTopBottom, posCenterCenter) => (
                    <Span style={tween(this.props.scrollY, [
                        [
                            posTopBottom, {
                                opacity: 0
                            }
                        ],
                        [
                            posCenterCenter, {
                                opacity: 1
                            }
                        ]
                    ])}>
                        <Col s={12} m={9} l={6} offset="l2">
                            <span dangerouslySetInnerHTML={{
                                __html: info.description
                            }}></span>
                            <Skills skills={info.skills}/>

                        </Col>
                        <Col s={12} m={3} l={2} className="right-align">
                            <img {...info.getAvatar()}/>
                        </Col>
                    </Span>
                )}
            </Track>
        )
    }
}
