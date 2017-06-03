import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    location: PropTypes.object.isRequired
};

export default function PageNotFound({location}) {
    return (
        <p className="p100 full-h">
            Page not found - the path, {location.pathname}, did not match any React Router routes.
        </p>
    );
}

PageNotFound.propTypes = propTypes;
