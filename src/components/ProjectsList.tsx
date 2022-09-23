import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { useProjects } from "../hooks/contentful";
import { useGlobalBackground } from "../state/global";

import { ProjectData, ProjectFields } from "../types/Project";

export function ProjectsList() {
  const { data } = useProjects();
  const { items }: { items: [ProjectData] } = data;
  const [, setBackground] = useGlobalBackground();

  const handleEnter = (fields: ProjectFields) => (
    () => {
      setBackground({ full: true, color: fields.color });
    }
  );

  const handleLeave = () => {
    setBackground({ full: true, color: "#FFFFFF" });
  };

  return (
    <List>
      {items.map((item) => (
        <Item key={item.sys.id}>
          <ProjectLink onMouseEnter={handleEnter(item.fields)} onMouseLeave={handleLeave} to={`projects/${item.sys.id}`}>
            {item.fields.projectName}
          </ProjectLink>
        </Item>
      ))}
    </List>
  );
}

const List = styled.div`
  font-size: 45px;
  line-height: 61px;
  min-height: 100vh;
  padding-top: 190px;
  position: relative;
  text-align: center;
  width: 100%;
`;

const Item = styled.div`
  position: relative;
  z-index: 1;
`;

const ProjectLink = styled(Link)`
  color: #000000;
  text-decoration: none;

  &:hover {
    text-decoration: line-through;
  }
`;
