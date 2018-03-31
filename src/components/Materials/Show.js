/**
 * Created by zhouqihang on 2018/3/14.
 */
import React, { Component } from 'react';
import { Table } from 'antd';

class Show extends Component {

    componentDidMount() {
        console.log(this.props);
        this.props.dispatch(this.props.requestMaterials());
    }

    render() {
        // rowSelection={rowSelection}
        const { materials } = this.props;
        const { columns, dataSource, isLoading } = materials;
        console.log(dataSource);
        return (
            <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                <Table columns={columns} dataSource={dataSource} rowKey="id" loading={isLoading} />
            </div>
        );
    }
}

export default Show;
