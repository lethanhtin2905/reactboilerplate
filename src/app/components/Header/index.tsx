import * as React from 'react';
import { Logo } from './assets/logo';
import './style.css';

import { Row, Col, Menu, Button } from 'antd';
import 'antd/dist/antd.css';

export function Header() {
  return (
    <Row className="header">
      <Col className="header-logo">
        <Logo />
      </Col>
      <Col flex="auto" className="header-nav">
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['1']}
          className="header-menu"
        >
          <Menu.Item
            key="home"
            className="nav-item active"
            style={{ marginLeft: 'auto' }}
          >
            Home
          </Menu.Item>
          <Menu.Item key="about" className="nav-item">
            About
          </Menu.Item>
          <Menu.Item key="pricing" className="nav-item">
            Pricing
          </Menu.Item>
          <Menu.Item key="signup" className="nav-signUp">
            <Button
              type="primary"
              size="large"
              style={{
                background: 'rgba(163, 110, 186, 1)',
                borderRadius: '15px',
                width: '155px',
                height: '58px',
                border: 'none',
              }}
            >
              Sign up
            </Button>
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  );
}
