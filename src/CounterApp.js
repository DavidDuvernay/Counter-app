import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

//functional component

const CounterApp = ({ value }) => {

    return (
        <Fragment>
            <h1>CoutnerAPP</h1>
            <h2>{ value }</h2> 
        </Fragment>
        );
};

CounterApp.protoTypes = {
    value: PropTypes.number.isRequired
};

CounterApp.defaultProps = {
    value: 0
};

export default CounterApp;