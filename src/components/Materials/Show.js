/**
 * Created by zhouqihang on 2018/3/14.
 */
import React, { Component } from 'react';
import { Table, Form, Row, Col, Button, Input, Popconfirm, Icon } from 'antd';
import InputNumberRange from '../Base/InputNumberRange';
import CreateModal from './CreateModal';

const FormItem = Form.Item;

class Show extends Component {

    constructor(props) {
        super(props);
        this.columns = [
            { dataIndex: 'material_number', title: '编号' },
            { dataIndex: 'material_title', title: '名称' },
            { dataIndex: 'material_unit', title: '计量单位' },
            { dataIndex: 'material_danger', title: '报警数量' },
            { dataIndex: 'material_count', title: '库存量' },
            {
                title: '操作',
                key: 'action',
                render: (text, record, index) => [
                    <Icon
                        type="edit"
                        key={record.id + 'edit'}
                        onClick={() => this.openCreateModal(record.id)}
                        className="icon icon-primary"
                    />,
                    <Popconfirm
                        title="确认要删除吗？"
                        onConfirm={() => this.removeMaterial(record.id)}
                        okText="删除"
                        cancelText="取消"
                        okType="danger"
                        key={record.id + 'remove'}
                    >
                        <Icon type="delete" className="icon icon-danger ml8" />
                    </Popconfirm>,
                ]
            },
        ];

        this.onInputChange = this.onInputChange.bind(this);
        this.onInputNumberChange = this.onInputNumberChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.resetQuery = this.resetQuery.bind(this);
        this.openCreateModal = this.openCreateModal.bind(this);
        this.closeCreateModal = this.closeCreateModal.bind(this);
        this.onCreateInputChange = this.onCreateInputChange.bind(this);
        this.createMaterial = this.createMaterial.bind(this);
        this.onPageChange = this.onPageChange.bind(this);
        this.removeMaterial = this.removeMaterial.bind(this);
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

    openCreateModal(id = 0) {
        this.props.dispatch(this.props.changeCreateStatus(true, id));
        if (id !== 0) {
            this.props.dispatch(this.props.queryMaterial());
        }
    }
    closeCreateModal() {
        this.props.dispatch(this.props.initState());
    }

    onCreateInputChange(name, value) {
        this.props.dispatch(this.props.onCreateInputChangeAction(name, value))
    }

    createMaterial() {
        this.props.dispatch(this.props.createMaterial());
    }

    removeMaterial(id = 0) {
        if (id === 0) {
            return false;
        }
        this.props.dispatch(this.props.removeMaterial(id));
    }

    onPageChange(page, pagesize) {
        this.props.dispatch(this.props.requestMaterials(page, pagesize));
    }

    componentDidMount() {
        this.props.dispatch(this.props.requestMaterials());
    }

    render() {
        // rowSelection={rowSelection}
        const { materials, createMaterials } = this.props;
        const { dataSource, isLoading, number, title, unit, countBegin, countEnd, page, total } = materials;
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
                            <Button ghost type="primary" icon="plus" onClick={this.openCreateModal}>
                                新增
                            </Button>
                            {/*<Button ghost type="danger" className="ml8" icon="delete">*/}
                                {/*删除*/}
                            {/*</Button>*/}
                        </Col>
                        <Col span={12} style={{ textAlign: 'right' }}>
                            <Button type="primary" onClick={this.handleSearch} loading={isLoading}>搜索</Button>
                            <Button className="ml8" onClick={this.resetQuery}>
                                重置
                            </Button>
                        </Col>
                    </Row>
                </Form>
                <Table
                    columns={this.columns}
                    dataSource={dataSource}
                    rowKey="id"
                    loading={isLoading}
                    pagination={{current: page, total, onChange: this.onPageChange}}
                />
                <CreateModal
                    createMaterials={createMaterials}
                    onOk={this.createMaterial}
                    onCancel={this.closeCreateModal}
                    onCreateInputChange={this.onCreateInputChange}
                />
            </div>
        );
    }
}

export default Show;
