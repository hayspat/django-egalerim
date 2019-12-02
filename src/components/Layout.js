import React, { useState } from "react";

import { Layout, Menu, Breadcrumb, Icon } from "antd";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const LayoutUI = props => {
  const { authenticated } = props;

  const [state, setState] = useState(false);

  const onCollapse = collapsed => {
    console.log(collapsed);
    setState({ collapsed });
  };
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="1">Anasayfa</Menu.Item>
          {authenticated ? (
            <Menu.Item key="2" onClick={() => props.logout()}>
              Logout
            </Menu.Item>
          ) : (
              <Menu.Item key="3">
                <Link to="/login">Login</Link>
              </Menu.Item>
            )}
        </Menu>
      </Header>
      <Layout style={{ minHeight: '93vh' }}>
        <Sider
          collapsible
          collapsed={state}
          onCollapse={() => setState(!state)}
          collapsedWidth={80}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["sub1"]} mode="inline">
            <Menu.Item key="111">
              <Icon type="home" />
              <span> <Link to="/">Ana Sayfa</Link></span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>
                    Ekleme işlemleri
                    </span>
                </span>
              }
            >
              <Menu.Item key="2">
                <Link to="/cariekle">Cari Ekle</Link>
              </Menu.Item>
              <Menu.Item key="14">
                <Link to="/cariliste">Cari Listele</Link>
              </Menu.Item>
              <Menu.Item key="13">
                <Link to="/stokekle">Stok Ekle</Link>
              </Menu.Item>
              <Menu.Item key="3" onClick={() => props.logout()}>
                Çıkış yap
              </Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="laptop" />
                  <span>subnav 2
                   </span>
                </span>
              }
            >
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={
                <span>
                  <Icon type="notification" />
                  <span>subnav 3
                  </span>
                </span>
              }
            >
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              background: "#fff",
              padding: 24,
              margin: 0,
              minHeight: 280
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

const mapStateToProps = state => {
  return {
    authenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LayoutUI)
);
