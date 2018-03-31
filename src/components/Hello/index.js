import React, { Component } from 'react';

// const Hello = ({props, initAction}) => {
//     const {text} = props;
//     return
// };

class Child extends Component {
    componentWillMount() {
        console.log('Child will mount');
    }
    componentDidMount() {
        console.log('Child did mount');
    }
    componentWillUpdate() {
        console.log('Child will update');
    }
    componentDidUpdate() {
        console.log('Child did update');
    }
    render() {
        return (
            <div>child</div>
        )
    }
}

class Hello extends Component {
    componentWillMount() {
        console.log('Hello will mount');
    }
    componentDidMount() {
        console.log('Hello did mount');
    }
    componentWillUpdate() {
        console.log('Hello will update');
    }
    componentDidUpdate() {
        console.log('Hello did update');
    }
    render() {
        const { text } = this.props.hello;
        const { initAction } = this.props;
        return (
            <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                <p onClick={initAction}>{text}</p>
                <Child/>
            </div>
        )
    }
}

export default Hello;
