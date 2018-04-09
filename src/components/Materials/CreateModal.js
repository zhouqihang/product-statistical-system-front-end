/**
 * Created by zhouqihang on 2018/4/9.
 */
import React from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';

class CreateModal extends React.Component {

    shouldComponentUpdate(nextProps) {
        return !(
            this.props.createMaterials.isCreating === false
            && nextProps.createMaterials.isCreating === false
        )
    }
    render() {
        const { createMaterials } = this.props;
        const { isCreating, isPosting } = createMaterials;
        return (
            <Modal title="新增原料"
                   visible={isCreating}
                   onOk={this.props.onOk}
                   confirmLoading={isPosting}
                   onCancel={this.props.onCancel}
            >
                {/*<Create />*/}
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