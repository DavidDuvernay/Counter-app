import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

//functional component

const CounterApp = ({ value }) => {

    //hook
    const [ counter, setCounter ] = useState( value );

    const addHandle = () => {
        setCounter( counter +1 );
    };

    const subHandle = () => {
        setCounter( counter -1 );
    };

    const resetHandle = () => {
        setCounter( value );
    }

    return (
        <Fragment>
            <h1>CounterAPP</h1>
            <h2>{ counter }</h2> 

            <button onClick = { subHandle }>Subtract  1</button>
            <button onClick = { resetHandle }>Reset</button>
            <button onClick = { addHandle }>Add 1</button>
        </Fragment>
        );
};

CounterApp.protoTypes = {
    value: PropTypes.number.isRequired
};

CounterApp.defaultProps = {
    value: 10
};

export default CounterApp;