import React, { useRef } from "react";
import styled from "styled-components";
import {
  useParams, useLocation, Link, Outlet,
} from "react-router-dom";
import { useIntersection } from "react-use";

import { ENGLISH, POLISH } from "./constants";
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
      { lang === ENGLISH && (
        <BottomRight to="/pl">PL</BottomRight>
      )}
      { lang === POLISH && (
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
  font-family: "General Sans", sans-serif;
  position: relative;
  min-height: 100vh;
  transition: all 0.2s;

  background: ${(props) => props.background};
`;

const Logo = styled.h1`
  position: fixed;
  font-size: 60px;
  margin: 30px auto 0;
  width: 100%;
  text-align: center;
  opacity: ${(props) => (props.hidden ? "0" : "1")};
`;

const HugeLogo = styled.h1`
  display: block;
  font-size: 10vw;
  margin: 0 auto;
  height: 100vh;
  line-height: 100vh;
  text-align: center;
`;

const Footer = styled.div`
  background: #fff;
  font-size: 25px;
  line-height: 36px;
  padding-top: 100px;
  height: 200px;
  text-align: center;
`;

const BigA = styled.a`
  text-decoration: none;
  color: #000000;

  &:hover {
    text-decoration: line-through;
  }
`;

const BigLink = styled(Link)`
  font-size: 35px;
  text-decoration: none;
  color: #000000;

  &:hover {
    text-decoration: line-through;
  }
`;

const Bottom = styled.div`
  bottom: 60px;
  left: 0;
  width: 100%;
  position: fixed;
  text-align: center;
  font-size: 35px;
  color: #000000;
`;

const FixedLink = styled(BigLink)`
  position: fixed;
  z-index: 100;
`;

const TopLeft = styled(FixedLink)`
  top: 60px;
  left: 80px;
`;

const TopRight = styled(FixedLink)`
  top: 60px;
  right: 80px;
`;

const BottomLeft = styled(FixedLink)`
  bottom: 60px;
  left: 80px;
`;

const BottomRight = styled(FixedLink)`
  bottom: 60px;
  right: 80px;
`;
