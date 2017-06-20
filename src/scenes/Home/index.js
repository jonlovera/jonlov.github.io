import React from 'react';
import {Link} from 'react-router-dom';
import {Row, Col, Button} from 'react-materialize';

import {TrackDocument} from 'react-track';
import {calculateScrollY, topBottom, topTop} from 'react-track/tracking-formulas';

import jsonData from 'json';

import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function Home() {
    return (
        <TrackDocument formulas={[calculateScrollY, topBottom, topTop]}>
            {(scrollY, topBottom, topTop) => (
                <div>
                    <div id="about">
                        <About info={jsonData.about} scrollY={scrollY} start={topBottom} end={topTop}/>
                    </div>
                    <div id="portfolio">
                        <Projects projects={jsonData.projects}/>
                    </div>
                    <div id="contact">
                        <Contact info={jsonData.about}/>
                    </div>
                </div>
            )
}</TrackDocument>
    );
}
