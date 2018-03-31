import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';
import HelloContainer from './containers/Hello';
import HomeContainer from './containers/Home';
import CreateMaterialsContainer from './containers/Materials/create';
import MaterialsContainer from './containers/Materials/show';
import './common/styles/index.scss';

const {Header, Content, Footer, Sider} = Layout;
const SubMenu = Menu.SubMenu;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        };
        this.onCollapse = this.onCollapse.bind(this);
    }
    onCollapse (collapsed) {
        this.setState({collapsed});
    }

    render() {
        return (
            <Router>
                <Layout style={{minHeight: '100vh'}}>
                    <Sider
                        collapsible
                        collapsed={this.state.collapsed}
                        onCollapse={this.onCollapse}
                    >
                        <div className="logo"/>
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1">
                                <Icon type="dashboard" />
                                <span className="nav"><Link to="/">Home</Link></span>
                            </Menu.Item>
                            <SubMenu
                                key="materials"
                                title={<span className="sub-nav-without-icon">原料管理</span>}
                            >
                                <Menu.Item key="2"><Link to="/materials">原料管理</Link></Menu.Item>
                                <Menu.Item key="3"><Link to="/materials/add">新增原料</Link></Menu.Item>
                            </SubMenu>
                            <Menu.Item key="4">
                                <Icon type="pie-chart"/>
                                <span className="nav"><Link to="/hello">Hello</Link></span>
                            </Menu.Item>
                            <SubMenu
                                key="sub2"
                                title={<span><Icon type="team"/><span>Team</span></span>}
                            >
                                <Menu.Item key="6">Team 1</Menu.Item>
                                <Menu.Item key="8">Team 2</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="9">
                                <Icon type="file"/>
                                <span>File</span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{background: '#fff', padding: 0}}/>
                        <Content style={{margin: '0 16px'}}>
                            <Breadcrumb style={{margin: '16px 0'}}>
                                <Breadcrumb.Item>User</Breadcrumb.Item>
                                <Breadcrumb.Item>Bill</Breadcrumb.Item>
                            </Breadcrumb>
                            <Switch>
                                <Route exact path="/" component={HomeContainer} />
                                <Route path="/hello" component={HelloContainer} />
                                <Route path="/materials/add/:id?" component={CreateMaterialsContainer} />
                                <Route path="/materials" component={MaterialsContainer} />
                                <Redirect to="/" />
                            </Switch>
                        </Content>
                        <Footer style={{textAlign: 'center'}}>
                            Ant Design ©2016 Created by Ant UED
                        </Footer>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}

export default App;