/**
 * Created by zhouqihang on 2018/4/13.
 */
import React, { Component } from 'react';
import { Button } from 'antd';

class Show extends Component {
    render() {
        return (
            <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                <Button ghost type="primary" icon="plus">
                    新增
                </Button>
            </div>
        );
    }
}

export default Show;