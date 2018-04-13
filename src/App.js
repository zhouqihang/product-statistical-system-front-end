import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';
import HelloContainer from './containers/Hello';
import HomeContainer from './containers/Home';
import MaterialsContainer from './containers/Materials';
import ProductsContainer from './containers/Products';
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
                            <Menu.Item key="2">
                                <span className="nav-without-icon"><Link to="/materials">原料管理</Link></span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <span className="nav-without-icon"><Link to="/products">产品管理</Link></span>
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
                                <Route path="/materials" component={MaterialsContainer} />
                                <Route path="/products" component={ProductsContainer} />
                                <Redirect to="/" />
                            </Switch>
                        </Content>
                        <Footer style={{textAlign: 'center'}}>
                            product-statistical-system ©2018 Created by Qi Hang
                        </Footer>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}

export default App;