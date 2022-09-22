import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { useProjects } from "../hooks/contentful";
import { useGlobalBackground } from "../state/global";

export function Home() {
  const { data } = useProjects();
  const { items } = data;
  const [, setBackground] = useGlobalBackground();

  const handleEnter = (fields) => (
    () => { setBackground(fields.color); }
  );

  const handleLeave = () => {
    setBackground("#FFFFFF");
  };

  return (
    <ProjectList>
      {items.map((item) => (
        <ProjectItem key={item.sys.id}>
          <ProjectLink onMouseEnter={handleEnter(item.fields)} onMouseLeave={handleLeave} to={`projects/${item.sys.id}`}>
            {item.fields.projectName}
          </ProjectLink>
        </ProjectItem>
      ))}
    </ProjectList>
  );
}

const ProjectList = styled.ul`
  font-size: 45px;
  line-height: 61px;
  padding-top: 190px;
  min-height: 100vh;
  width: 100%;
  text-align: center;
`;

const ProjectItem = styled.li`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ProjectLink = styled(Link)`
  text-decoration: none;
  color: #000000;

  &:hover {
    text-decoration: line-through;
  }
`;
