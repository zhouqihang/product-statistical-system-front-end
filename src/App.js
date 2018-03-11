import React, { Component } from 'react';
import { Button } from 'antd';
import HelloContainer from './containers/Hello';
import './common/styles/index.scss';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Button type="primary">Button</Button>
                <HelloContainer />
            </div>
        );
    }
}

export default App;