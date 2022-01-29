import * as React from 'react';
import styled from 'styled-components/macro';
import { Logo } from './Logo';
import { StyleConstants } from 'styles/StyleConstants';
import { Nav } from './Nav';

export function Footer() {
  return (
    <Wrapper>
      <Logo />
      <Nav />
    </Wrapper>
  );
}

const Wrapper = styled.header`
  box-shadow: 0 1px 0 0 ${p => p.theme.borderLight};
  display: flex;
  position: fixed;
  top: 47px;
  width: 100%;
  z-index: 2;
`;
