/**
 * Created by zhouqihang on 2018/3/14.
 */
import React, { Component } from 'react';
import { Table, Form, Row, Col, Button, Icon, Input } from 'antd';
import InputNumberRange from '../Base/InputNumberRange';
import CreateModal from './CreateModal';

const FormItem = Form.Item;

class Show extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onInputNumberChange = this.onInputNumberChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.resetQuery = this.resetQuery.bind(this);
    }

    onInputChange({ target }) {
        const { name, value } = target;
        this.props.dispatch(this.props.onInputChangeAction(name, value));
    }

    onInputNumberChange(name, value) {
        this.props.dispatch(this.props.onInputChangeAction(name, value));
    }

    handleSearch() {
        this.props.dispatch(this.props.requestMaterials());
    }

    resetQuery() {
        this.props.dispatch(this.props.resetQueryAction());
    }

    componentDidMount() {
        this.props.dispatch(this.props.requestMaterials());
    }

    render() {
        // rowSelection={rowSelection}
        const { materials, createMaterials } = this.props;
        const { columns, dataSource, isLoading, number, title, unit, countBegin, countEnd } = materials;
        const startProps = {
            min: 0,
            step: 1,
            onChange: (v) => {
                this.onInputNumberChange('countBegin', v);
            },
            value: countBegin,
        };
        const endProps = {
            ...startProps,
            onChange: (v) => {
                this.onInputNumberChange('countEnd', v);
            },
            value: countEnd,
        };
        return (
            <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                <Form
                    className="search mb24"
                >
                    <Row gutter={24}>
                        <Col span={8}>
                            <FormItem label="原料编号">
                                <Input type="text" name="number" onChange={this.onInputChange} value={number} />
                            </FormItem>
                        </Col>
                        <Col span={8}>
                            <FormItem label="原料名称">
                                <Input type="text" name="title" onChange={this.onInputChange} value={title} />
                            </FormItem>
                        </Col>
                        <Col span={8}>
                            <FormItem label="计量单位">
                                <Input type="text" name="unit" onChange={this.onInputChange} value={unit} />
                            </FormItem>
                        </Col>
                        <Col span={8}>
                            <FormItem label="库存余量">
                                <InputNumberRange startProps={startProps} endProps={endProps} />
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <Button ghost type="primary" icon="plus">
                                新增
                            </Button>
                            <Button ghost type="danger" className="ml8" icon="delete">
                                删除
                            </Button>
                        </Col>
                        <Col span={12} style={{ textAlign: 'right' }}>
                            <Button type="primary" onClick={this.handleSearch} loading={isLoading}>搜索</Button>
                            <Button className="ml8" onClick={this.resetQuery}>
                                重置
                            </Button>
                        </Col>
                    </Row>
                </Form>
                <Table columns={columns} dataSource={dataSource} rowKey="id" loading={isLoading} />
                <CreateModal createMaterials={createMaterials}  />
            </div>
        );
    }
}

export default Show;
