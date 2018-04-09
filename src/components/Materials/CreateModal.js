/**
 * Created by zhouqihang on 2018/4/9.
 */
import React from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';
import CreateContainer from './CreateContainer';

class CreateModal extends React.Component {

    shouldComponentUpdate(nextProps) {
        return !(
            this.props.createMaterials.isCreating === false
            && nextProps.createMaterials.isCreating === false
        );
    }
    render() {
        const { createMaterials, onCreateInputChange, onOk } = this.props;
        const { isCreating, isPosting } = createMaterials;
        return (
            <Modal title="新增原料"
                   visible={isCreating}
                   onOk={onOk}
                   confirmLoading={isPosting}
                   onCancel={this.props.onCancel}
                   okText="确认"
                   cancelText="取消"
            >
                <CreateContainer
                    onInputChange={onCreateInputChange}
                    material={createMaterials}
                />
            </Modal>
        );
    }
}

CreateModal.propTypes = {
    onOk: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    createMaterials: PropTypes.object.isRequired,
};

export default CreateModal;