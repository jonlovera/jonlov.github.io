import React from 'react';
import {Col, Row} from 'react-materialize';
import jsonData from 'json';
import 'typed.js';

export default function TopSection() {
    $(document).ready(() => {
        Typed.new('#typeName span', {
            strings: [jsonData.about.name],
            typeSpeed: 80,
            //callback for every typed string
            onStringTyped: function() {
                $(".typed-cursor").hide();

                Typed.new('#typeTitle span', {
                    strings: [jsonData.about.title],
                    typeSpeed: 80,
                    //callback for every typed string
                    onStringTyped: function() {
                        $(".typed-cursor").hide();
                    }
                });
            }
        });
    });

    return (
        <div id="push">
            <section id="home" className="valign-wrapper full-h">
                <Row className="no-margin full-w full-h">
                    <Col s={12} className='valign-wrapper full-h'>
                        <Row className="full-h m-b-n">
                            <Col s={12} className="table full-h">
                                <div className="angled-remove table-cell valign-middle">
                                    <div id="welcome">
                                        <h1 id="typeName" className="no-margin center-align">
                                            <span></span>
                                        </h1>
                                        <h3 id="typeTitle" className="monaco center-align" style={{
                                            fontSize: "40px",
                                            margin: 0
                                        }}>
                                            <span></span>
                                        </h3>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </section>
        </div>
    );
};
