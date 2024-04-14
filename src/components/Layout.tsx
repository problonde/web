import React, { useRef } from "react";
import styled from "styled-components";
import { useParams, useLocation, Link, Outlet } from "react-router-dom";
import { useIntersection } from "react-use";

import { Language } from "../types";
import { useLinks } from "../hooks/contentful";
import {
  Background,
  BackgroundType,
  useGlobalBackground,
} from "../state/global";

export function Layout() {
  const { lang } = useParams();
  const { data } = useLinks();
  const { items } = data;
  const [background] = useGlobalBackground();

  const date = new Date();

  const location = useLocation();
  // eslint-disable-next-line
  const isHome = location.pathname.match(/^\/(pl|en)[\/]?$/);
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  return (
    <Wrapper $background={background}>
      <TopLeft to="projects">PROJECTS</TopLeft>
      <BottomLeft to="contact">CONTACT</BottomLeft>
      <TopRight to="studio">STUDIO</TopRight>
      {lang === Language.English && <BottomRight to="/pl">PL</BottomRight>}
      {lang === Language.Polish && <BottomRight to="/en">ENG</BottomRight>}
      {isHome && (
        <Bottom>
          {items.map((link: any, index: number) => (
            <span key={link.fields.title}>
              {index > 0 && " / "}
              <BigA target="_blank" href={link.fields.link}>
                {link.fields.title}
              </BigA>
            </span>
          ))}
        </Bottom>
      )}
      <Logo $hidden={!!intersection && intersection.isIntersecting}>
        problonde
      </Logo>
      {isHome && <HugeLogo ref={intersectionRef}>problonde</HugeLogo>}
      <Outlet />
      <Footer>
        created by Problonde Studio{" "}
        {date.getFullYear()}
      </Footer>
    </Wrapper>
  );
}

const backgroundCSS = ({
  background: { type, color },
}: {
  background: Background;
}) => {
  switch (type) {
    case BackgroundType.Animated:
      return `
        animation-name: background;
        animation-duration: 10s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        animation-play-state: running;`;
    case BackgroundType.Half:
      return `background: linear-gradient(180deg, ${color} "150vh"}, #FFFFFF 0%);`;
    case BackgroundType.Full:
    default:
      return `background: ${color};`;
  }
};

const Wrapper = styled.div<{ $background: Background }>`
  @keyframes background {
    0% {
      background-color: #ffffff;
    }
    20% {
      background-color: #e3ffb5;
    }
    40% {
      background-color: #e57200;
    }
    60% {
      background-color: #5dade2;
    }
    80% {
      background-color: #cc8899;
    }
    100% {
      background-color: #ffffff;
    }
  }

  ${({ $background }) => backgroundCSS({ background: $background })}
  font-family: "General Sans", sans-serif;
  min-height: 100vh;
  position: relative;

  transition: all 0.2s;
`;

const Logo = styled.h1<{ $hidden: boolean }>`
  font-size: 3.75rem;
  margin: 2rem auto 0;
  opacity: ${({ %hidden }) => ($hidden ? "0" : "1")};
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
  font-size: 1.5rem;
  height: 12.5rem;
  line-height: 2.25rem;
  padding-top: 6.25rem;
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
  font-size: 2.2rem;
  text-decoration: none;

  &:hover {
    text-decoration: line-through;
  }
`;

const Bottom = styled.div`
  bottom: 3.75rem;
  color: #000000;
  font-size: 2.2rem;
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
  left: 5rem;
  top: 3.75rem;
`;

const TopRight = styled(FixedLink)`
  right: 5rem;
  top: 3.75rem;
`;

const BottomLeft = styled(FixedLink)`
  bottom: 3.75rem;
  left: 5rem;
`;

const BottomRight = styled(FixedLink)`
  bottom: 3.75rem;
  right: 5rem;
`;
