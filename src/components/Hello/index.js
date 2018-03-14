import React, {Component} from 'react';

const Hello = ({props, initAction}) => {
    const {text} = props;
    return <div style={{padding: 24, background: '#fff', minHeight: 360}}><p onClick={initAction}>{text}</p></div>
};

export default Hello;
