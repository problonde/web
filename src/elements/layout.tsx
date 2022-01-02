import React from 'react';
import styled from 'styled-components';

import { useParams, Link, Outlet } from 'react-router-dom';

import { ENGLISH, POLISH } from '../components/constants';

export function Layout() {
  const { lang } = useParams();

  return (
    <Wrapper>
      <TopLeft to="projects">PROJECTS</TopLeft>
      <BottomLeft to="contact">CONTACT</BottomLeft>
      <TopRight to="studio">STUDIO</TopRight>
      { lang === ENGLISH && (
      <BottomRight to="/pl">PL</BottomRight>
      )}
      { lang === POLISH && (
      <BottomRight to="/en">ENG</BottomRight>
      )}
      <Logo>problonde</Logo>
      <ContentWrap>
        <Outlet />
      </ContentWrap>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: "General Sans", sans-serif;
  position: relative;
  min-height: 100vh;
`;

const ContentWrap = styled.div`
  padding: 100px;
`;

const Logo = styled.h1`
  position: fixed;
  font-size: 60px;
  margin: 30px auto 0;
  width: 100%;
  text-align: center;
`;

const BigLink = styled(Link)`
  position: fixed;
  font-size: 35px;
  text-decoration: none;
  color: #000000;
  z-index: 100;

  &:hover {
    text-decoration: underline;
  }
`;

const TopLeft = styled(BigLink)`
  top: 60px;
  left: 80px;
`;

const TopRight = styled(BigLink)`
  top: 60px;
  right: 80px;
`;

const BottomLeft = styled(BigLink)`
  bottom: 60px;
  left: 80px;
`;

const BottomRight = styled(BigLink)`
  bottom: 60px;
  right: 80px;
`;
