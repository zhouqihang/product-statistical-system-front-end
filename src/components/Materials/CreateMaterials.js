/**
 * Created by zhouqihang on 2018/3/14.
 */

import React, { Component } from 'react';
import { Form, Input, Button, InputNumber } from 'antd';

const FormItem = Form.Item;
const { TextArea } = Input;
const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 14 },
};
const buttonItemLayout = {
    wrapperCol: { span: 14, offset: 4 },
};

class CreateMaterials extends Component {

    componentDidMount() {

    }

    render() {
        const {
            createMaterials,
            onNumberChangeAction
        } = this.props;
        const {
            number,
            title,
            unit,
            count,
            danger,
            remark,
        } = createMaterials;

        return (
            <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                <h2>新增原料</h2>
                <Form>
                    <FormItem
                        label="原料编号"
                        {...formItemLayout}
                        hasFeedback
                        validateStatus={number.status}
                        help={number.help}
                    >
                        <Input placeholder="例:MD-001" value={number.value} onChange={onNumberChangeAction} />
                    </FormItem>
                    <FormItem
                        label="原料名称"
                        {...formItemLayout}
                        hasFeedback
                        validateStatus={title.status}
                        help={title.help}
                    >
                        <Input placeholder="例:荧光剂" value={title.value} />
                    </FormItem>
                    <FormItem
                        label="计量单位"
                        {...formItemLayout}
                        hasFeedback
                        validateStatus={unit.status}
                        help={unit.help}
                    >
                        <Input placeholder="例:G、KG、T、ML、L" value={unit.value} />
                    </FormItem>
                    <FormItem
                        label="报警数量"
                        {...formItemLayout}
                        hasFeedback
                        validateStatus={danger.status}
                        help={danger.help}
                    >
                        <InputNumber min={0} step={0.001} value={danger.value} />
                    </FormItem>
                    <FormItem
                        label="原料库存"
                        {...formItemLayout}
                        hasFeedback
                        validateStatus={count.status}
                        help={count.help}
                    >
                        <InputNumber min={0} step={0.001} value={count.value} />
                    </FormItem>
                    <FormItem
                        label="备注"
                        {...formItemLayout}
                        hasFeedback
                        validateStatus={remark.status}
                        help={remark.help}
                    >
                        <TextArea placeholder="请输入" autosize={{ minRows: 2, maxRows: 6 }} value={remark.value} />
                    </FormItem>
                    <FormItem
                        {...buttonItemLayout}
                    >
                        <Button type="primary">确认</Button>
                        <Button type="default" className="ml24">取消</Button>
                    </FormItem>
                </Form>
            </div>
        );
    }
}
export default CreateMaterials;
