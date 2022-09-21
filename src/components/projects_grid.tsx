import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Header, Asset, ContentNode } from '../elements';
import { useAsset } from '../hooks/contentful';
import { ProjectType } from './constants';

function ProjectItem({ project }) {
  const { data, loading } = useAsset(project.fields.mainImage.sys.id);
  const { fields } = data;

  if (loading) {
    return null;
  }

  return (
    <Item key={project.sys.id}>
      <SquareLink image={fields.file.url} color={project.fields.color} to={`${project.sys.id}`}>
        <span>{project.fields.projectName}</span>
      </SquareLink>
    </Item>
  );
}

function Filter({ filter, setFilter }) {
  return (
    <FilterWrapper>
      {Object.values(ProjectType).map((type) =>
      <FilterLink href="#" active={type === filter} onClick={() => setFilter(type)}>
        {type}
      </FilterLink>
      )}
    </FilterWrapper>
  );
}

export function ProjectsGrid({ projects }) {
  const [filter, setFilter] = useState<ProjectType>(null);
  const filteredProjects = filter ? projects.filter((project) => project.fields.projectType.includes(filter)) : projects
  return (
    <Wrapper>
      <Filter filter={filter} setFilter={setFilter}/>
      <Grid>
        {filteredProjects.map((item) => (
          <ProjectItem project={item} />
        ))}
      </Grid>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 190px 100px;
  min-height: 100vh;
`;

const Grid = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const FilterWrapper = styled.div`
  padding-bottom: 27px;
  display: flex;
  justify-content: space-evenly;
`

const FilterLink = styled.a<{ active }>`
  text-decoration: ${({ active }) => active ? 'line-through' : 'none' };
  font-size: 35px;
  color: #000;

  &:hover {
    text-decoration: line-through;
  }
`;

const Item = styled.li`
  display: block;
  width: 330px;
  height: 330px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SquareLink = styled(Link)<{ color, image }>`
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
  background-image: ${({ image }) => `url("${image}")`}};
  background-size: cover;
  background-position: center;

  span {
    opacity: 0;
  }

  &:hover {
    background-image: none;
    background-color: ${({ color }) => color};

    span {
      opacity: 1;
    }
  }
`;
