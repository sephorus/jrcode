import React from 'react';
import PropTypes from 'prop-types';

function Title(props) {
    const { title, subtitle } = props;
    return (
        <div class="title-container">
            {
                subtitle && <h1 className="headline2 shadow-title">{ subtitle }</h1>
            }
            <h1 className="headline1">{ title }</h1>
        </div>
    )
}

export default Title;

Title.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
}