/**
 * Created by zhouqihang on 2018/3/14.
 */

import React, { Component } from 'react';
import { Form, Input, InputNumber } from 'antd';
import PropTypes from 'prop-types';

const FormItem = Form.Item;
const { TextArea } = Input;
const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 14 },
};
// const buttonItemLayout = {
//     wrapperCol: { span: 14, offset: 4 },
// };

class CreateContainer extends Component {

    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
        this.onInputNumberChange = this.onInputNumberChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onInputChange(e) {
        this.props.onInputChange(e.target.name, e.target.value);
    }

    onInputNumberChange(name, value) {
        this.props.onInputChange(name, value);
    }

    onSubmit() {
        this.props.onSubmit();
    }

    render() {
        const {
            material,
        } = this.props;
        const {
            number,
            title,
            unit,
            count,
            danger,
            remark,
            isPosting,
        } = material;

        return (
            <Form>
                <FormItem
                    label="原料编号"
                    {...formItemLayout}
                    hasFeedback
                    validateStatus={number.status}
                    help={number.help}
                >
                    <Input name="number" placeholder="例:MD-001" disabled={isPosting} value={number.value} onChange={this.onInputChange} />
                </FormItem>
                <FormItem
                    label="原料名称"
                    {...formItemLayout}
                    hasFeedback
                    validateStatus={title.status}
                    help={title.help}
                >
                    <Input name="title" placeholder="例:荧光剂" disabled={isPosting} value={title.value} onChange={this.onInputChange} />
                </FormItem>
                <FormItem
                    label="计量单位"
                    {...formItemLayout}
                    hasFeedback
                    validateStatus={unit.status}
                    help={unit.help}
                >
                    <Input name="unit" placeholder="例:G、KG、T、ML、L" disabled={isPosting} value={unit.value} onChange={this.onInputChange} />
                </FormItem>
                <FormItem
                    label="报警数量"
                    {...formItemLayout}
                    hasFeedback
                    validateStatus={danger.status}
                    help={danger.help}
                >
                    <InputNumber name="danger" disabled={isPosting} min={0} step={0.001} value={danger.value} onChange={(v) => this.onInputNumberChange('danger', v)} />
                </FormItem>
                <FormItem
                    label="原料库存"
                    {...formItemLayout}
                    hasFeedback
                    validateStatus={count.status}
                    help={count.help}
                >
                    <InputNumber name="count" disabled={isPosting} min={0} step={0.001} value={count.value} onChange={(v) => this.onInputNumberChange('count', v)} />
                </FormItem>
                <FormItem
                    label="备注"
                    {...formItemLayout}
                    hasFeedback
                    validateStatus={remark.status}
                    help={remark.help}
                >
                    <TextArea name="remark" placeholder="请输入" disabled={isPosting} autosize={{ minRows: 2, maxRows: 6 }} value={remark.value} onChange={this.onInputChange} />
                </FormItem>
            </Form>
        );
    }
}

CreateContainer.propTypes = {
    onInputChange: PropTypes.func.isRequired,
    material: PropTypes.object.isRequired,
};

export default CreateContainer;
