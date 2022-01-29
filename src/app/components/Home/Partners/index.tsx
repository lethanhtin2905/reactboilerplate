import * as React from 'react';
import './style.css';
import { Row, Col, Typography } from 'antd';
import 'antd/dist/antd.css';
import { Reddit, ATaT, LinkedIn, Zendesk } from './assets/partners';

export function Partners() {
  return (
    <div className="partner">
      <Row justify="center">
        <Typography.Title level={2} className="partner-content">Partners we’ve work with</Typography.Title>
      </Row>
      <Row className="partner-wrapper" justify="center">
        <Col span={6} className="partner-item">
          <Reddit />
        </Col>
        <Col span={6}>
          <ATaT />
        </Col>
        <Col span={6}>
          <LinkedIn />
        </Col>
        <Col span={6}>
          <Zendesk />
        </Col>
      </Row>
    </div>
  );
}