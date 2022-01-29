import * as React from 'react';
import styled from 'styled-components/macro';
import LogoImg from './assets/Group.png';

export function Logo() {
  return (
    <Wrapper>
      <Image alt={`This is logo`} src={LogoImg} />
      <Title>LeadHub</Title>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  left: 137px;
  top: 47px;
`;

const Image = styled.img`
  width: 36px;
  height: 31px;
  position: absolute;
`;

const Title = styled.div`
  width: 131px;
  height: 37px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 42px;
  letter-spacing: -0.04em;
  color: #3a363e;
`;
