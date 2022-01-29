import * as React from 'react';
import './style.css';
import { Row, Col, Typography } from 'antd';
import 'antd/dist/antd.css';
import { Step1, Step2, Step3, Number1, Number2, Number3 } from './assets/step';

export function Tutorial() {
  return (
    <div className="tutorial">
      <Row className="tutorial-wrapper" gutter={48}>
        <Col span={8} className="tutorial-item item-1">
          <Step1 />
          <Number1 />
          <div className="item-wrapper">
            <Typography.Title className="item-title" level={3}>
              Sign up
            </Typography.Title>
            <Typography.Paragraph className="item-des">
              Zombie ipsum reversus ab viral inferno, nam rick grimes malum
              cerebro. De carne lumbering animata.
            </Typography.Paragraph>
          </div>
        </Col>
        <Col span={8} className="tutorial-item item-2">
          <Step2 />
          <Number2 />
          <div className="item-wrapper">
            <Typography.Title level={3} className="item-title item-2-title">
              Track leads
            </Typography.Title>
            <Typography.Paragraph className="item-des item-2-des">
              Craven omni memoria patriae zombieland clairvius narcisse
              religionis sunt diri undead historiarum.
            </Typography.Paragraph>
          </div>
        </Col>
        <Col span={8} className="tutorial-item item-3">
          <Step3></Step3>
          <Number3 />
          <div className="item-wrapper">
            <Typography.Title level={3} className="item-title">
              Increase Sales
            </Typography.Title>
            <Typography.Paragraph className="item-des">
              Sicut spargit virus ad impetum, qui supersumus flesh eating.
            </Typography.Paragraph>
          </div>
        </Col>
      </Row>
    </div>
  );
}
