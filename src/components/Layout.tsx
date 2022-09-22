import React, { useRef } from "react";
import styled from "styled-components";
import {
  useParams, useLocation, Link, Outlet,
} from "react-router-dom";
import { useIntersection } from "react-use";

import { Language } from "../types";
import { useLinks } from "../hooks/contentful";
import { useGlobalBackground } from "../state/global";

export function Layout() {
  const { lang } = useParams();
  const { data } = useLinks();
  const { items } = data;
  const [background] = useGlobalBackground();

  const date = new Date();

  const location = useLocation();
  const isHome = ["/pl", "/en"].includes(location.pathname);
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  return (
    <Wrapper background={background}>
      <TopLeft to="projects">PROJECTS</TopLeft>
      <BottomLeft to="contact">CONTACT</BottomLeft>
      <TopRight to="studio">STUDIO</TopRight>
      { lang === Language.English && (
        <BottomRight to="/pl">PL</BottomRight>
      )}
      { lang === Language.Polish && (
        <BottomRight to="/en">ENG</BottomRight>
      )}
      { isHome && (
        <Bottom>
          {items.map((link: any, index: number) => (
            <span key={link.fields.title}>
              {index > 0 && (" / ")}
              <BigA target="_blank" href={link.fields.link}>{link.fields.title}</BigA>
            </span>
          ))}
        </Bottom>
      )}
      <Logo hidden={intersection && intersection.isIntersecting > 0}>problonde</Logo>
      {isHome && (<HugeLogo ref={intersectionRef}>problonde</HugeLogo>)}
      <Outlet />
      <Footer>
        created by Problonde Studio
        {" "}
        {date.getFullYear()}
      </Footer>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ background: string }>`
  background: ${(props) => props.background};
  font-family: "General Sans", sans-serif;
  min-height: 100vh;
  position: relative;

  transition: all 0.2s;
`;

const Logo = styled.h1<{ hidden: boolean }>`
  font-size: 60px;
  margin: 30px auto 0;
  opacity: ${({ hidden }) => (hidden ? "0" : "1")};
  position: fixed;
  text-align: center;
  width: 100%;
  z-index: 1;
`;

const HugeLogo = styled.h1`
  display: block;
  font-size: 10vw;
  height: 100vh;
  line-height: 100vh;
  margin: 0 auto;
  text-align: center;
`;

const Footer = styled.div`
  background: #fff;
  font-size: 25px;
  height: 200px;
  line-height: 36px;
  padding-top: 100px;
  text-align: center;
`;

const BigA = styled.a`
  color: #000000;
  text-decoration: none;

  &:hover {
    text-decoration: line-through;
  }
`;

const BigLink = styled(Link)`
  color: #000000;
  font-size: 35px;
  text-decoration: none;

  &:hover {
    text-decoration: line-through;
  }
`;

const Bottom = styled.div`
  bottom: 60px;
  color: #000000;
  font-size: 35px;
  left: 0;
  position: fixed;
  text-align: center;
  width: 100%;
`;

const FixedLink = styled(BigLink)`
  position: fixed;
  z-index: 100;
`;

const TopLeft = styled(FixedLink)`
  left: 80px;
  top: 60px;
`;

const TopRight = styled(FixedLink)`
  right: 80px;
  top: 60px;
`;

const BottomLeft = styled(FixedLink)`
  bottom: 60px;
  left: 80px;
`;

const BottomRight = styled(FixedLink)`
  bottom: 60px;
  right: 80px;
`;
