import React, {Component} from 'react';

const Hello = ({props, initAction}) => {
    console.log(props, 'com');
    const {text} = props;
    return <p onClick={initAction}>{text}</p>
};

export default Hello;
