import React, {Component} from 'react';
import jsonData from 'json';

export default class Footer extends Component {
    render() {
        return (
            <footer className="page-footer small center-align blue">
                <div className="container"/>
                <div className="footer-copyright">
                    <div className="container">
                        <div>
                            Made with
                            <i className="fa fa-heart"></i>using ReactJS and compiled with Webpack.
                            <a className="white-text underline" href="https://github.com/jonlov/jonlov.github.io" target="_BLANK">
                                (View source code)
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
