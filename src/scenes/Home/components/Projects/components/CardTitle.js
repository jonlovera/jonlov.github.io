import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import constants from 'react-materialize/lib/constants';

class CardTitle extends Component {
    render() {
        let {
            image,
            reveal,
            waves,
            children,
            ...props
        } = this.props;
        let classes = {
            'card-image': true
        };
        if (waves) {
            classes['waves-effect'] = true;
            classes['waves-' + waves] = true;
            classes['waves-block'] = true;
        }
        let imgClasses = {
            'activator': reveal
        };
        let titleClasses = {
            'card-title': true
        };
        return (
            <div className={cx(classes)} {...props}>
                <img className={cx(imgClasses)} src={image.src} srcSet={image.srcSet}/>
                <span className={cx(titleClasses)}>{children}</span>
            </div>
        );
    }
}

CardTitle.propTypes = {
    children: PropTypes.node,
    // Whether the image serves as activator for the reveal
    reveal: PropTypes.bool,
    // the waves effect
    waves: PropTypes.oneOf(constants.WAVES),
    // The path to the image
    image: PropTypes.object.isRequired
};

export default CardTitle;
