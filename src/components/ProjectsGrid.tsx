import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { useAsset } from "../hooks/contentful";
import { ProjectType, ProjectTypeValues } from "../types";
import { useGlobalBackground } from "../state/global";

function ProjectItem({ project }: any) {
  const { data, loading } = useAsset(project.fields.mainImage.sys.id);
  const { fields } = data;

  if (loading) {
    return null;
  }

  return (
    <Item key={project.sys.id}>
      <SquareLink
        $image={fields.file.url}
        $color={project.fields.color}
        to={`${project.sys.id}`}
      >
        <span>{project.fields.projectName}</span>
      </SquareLink>
    </Item>
  );
}

type FilterProps = {
  filter: ProjectType;
  setFilter: (type: ProjectType) => void;
};
function Filter({ filter, setFilter }: FilterProps) {
  const wrapClick = (callback: () => void) => (e: any) => {
    e.preventDefault();
    callback();
  };
  return (
    <FilterWrapper>
      {ProjectTypeValues.map((type) => (
        <FilterLink
          href="#"
          key={`p-filt-${type}`}
          $active={type === filter}
          onClick={wrapClick(() => setFilter(type))}
        >
          {type}
        </FilterLink>
      ))}
    </FilterWrapper>
  );
}

export function ProjectsGrid({ projects }: any) {
  const [filter, setFilter] = useState<ProjectType>("All");
  const filteredProjects =
    filter !== "All"
      ? projects.filter((project: any) =>
          project.fields.projectType.includes(filter),
        )
      : projects;

  const [, setBackground] = useGlobalBackground();

  useEffect(() => {
    setBackground({ type: "Full", color: "#FFFFFF" });
  }, []);

  return (
    <Wrapper>
      <Filter filter={filter} setFilter={setFilter} />
      <Grid>
        {filteredProjects.map((item: any) => (
          <ProjectItem key={`pg-item-${item.sys.id}`} project={item} />
        ))}
      </Grid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 190px 100px;
`;

const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 27px;
`;

const FilterLink = styled.a<{ $active: boolean }>`
  color: #000;
  font-size: 35px;
  text-decoration: ${({ $active }) => ($active ? "line-through" : "none")};

  &:hover {
    text-decoration: line-through;
  }
`;

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 33%);
`;

const Item = styled.li`
  aspect-ratio: 1;
  display: block;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const SquareLink = styled(Link)<{ $color: string; $image: string }>`
  transition: all .2s;
  display: block;
  width: 100%;
  height: 100%;
  font-size: 36px;
  line-height: 48px;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: ${({ $image }) => `url("${$image}")`}};
  background-size: cover;
  background-position: center;

  span {
    opacity: 0;
  }

  &:hover {
    background-image: none;
    background-color: ${({ $color }) => $color};

    span {
      opacity: 1;
    }
  }
`;
