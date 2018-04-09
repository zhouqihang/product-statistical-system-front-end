/**
 * Created by zhouqihang on 2018/4/9.
 */
import React from 'react';
import { Modal } from 'antd';

class CreateModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmLoading: false,
        }
    }

    handleOk() {

    }

    handleCancel() {

    }

    render() {
        return (
            <Modal title="Title"
                   visible={true}
                   onOk={this.handleOk}
                   confirmLoading={this.state.confirmLoading}
                   onCancel={this.handleCancel}
            >
                {/*<Create />*/}
            </Modal>
        );
    }
}

export default CreateModal;