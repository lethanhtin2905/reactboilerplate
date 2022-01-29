/* eslint-disable prettier/prettier */
import * as React from 'react';
import './style.css';
import { Manage, Phone, FeatureImg, Automate, Report } from './assets/feature';

import { Row, Col, Typography } from 'antd';
import 'antd/dist/antd.css';

export function Features() {
  return (
    <Row className="feature">
      <Col span={14} className="feature-wrapper">
        <Typography.Title className="feature-title">
          Features
        </Typography.Title>
        <Row gutter={48}>
          <Col span={12}>
            <div className="feature-item">
              <Manage />
              <Typography.Title className="feature-item-title">
                Manage leads and deals 
              </Typography.Title>
              <Typography.Paragraph className="feature-item-des">
                Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata.
              </Typography.Paragraph>
            </div>
          </Col>
          <Col span={12}>
            <div className="feature-item">
              <Phone />
              <Typography.Title className="feature-item-title">
                Track Communication
              </Typography.Title>
              <Typography.Paragraph className="feature-item-des">
                Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata.
              </Typography.Paragraph>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <div className="feature-item">
              <Automate />
              <Typography.Title className="feature-item-title">
                Automate & Grow
              </Typography.Title>
              <Typography.Paragraph className="feature-item-des">
                Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata.
              </Typography.Paragraph>
            </div>
          </Col>
          <Col span={12}>
            <div className="feature-item">
              <Report />
              <Typography.Title className="feature-item-title">
                Insights & Reports
              </Typography.Title>
              <Typography.Paragraph className="feature-item-des">
                Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata.
              </Typography.Paragraph>
            </div>
          </Col>
        </Row>
      </Col>
      <Col span={7} >
          <div className="feature-img"><FeatureImg /></div>
        
      </Col>
    </Row>
  );
}
