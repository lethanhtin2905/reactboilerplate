import * as React from 'react';
import { IntroImg } from './assets/intro';
import './style.css';
import { Row, Col, Typography, Button } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

export function Intro() {
  return (
    <Row className="intro">
      <Col span={12} className="intro-content">
        <Typography.Title className="intro-title">
          Designed and built to keep you selling
        </Typography.Title>
        <Typography.Paragraph className="intro-des">
          When you need to stay focused and alert on the right deals, our CRM is
          here to support you.
        </Typography.Paragraph>
        <Row className="introBtn">
          <Button
            type="primary"
            size="large"
            style={{
              marginRight: 16,
              width: 270,
              height: 72,
              borderRadius: 20,
              border: 'none',
              background: 'rgba(163, 110, 186, 1)',
              fontFamily: 'Poppins',
              fontWeight: 'bold',
              fontSize: 16,
              lineHeight: '13px',
              /* identical to box height, or 13px */
              textAlign: 'center',
              /* Color/White */
              color: '#FFFFFF',
            }}
          >
            Try it for free
          </Button>
          <Button
            shape="circle"
            style={{
              marginRight: 8,
              width: 72,
              height: 72,
              opacity: 0.3,
              border: '8px solid #A36EBA',
              boxSizing: 'border-box',
            }}
            icon={<CaretRightOutlined />}
            size="large"
          />
        </Row>
      </Col>
      <Col span={12} className="intro-img">
        <IntroImg />
      </Col>
    </Row>
  );
}
