import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import { useProject } from '../hooks/contentful';
import { useGlobalState } from '../state/global';

export function Project() {
  const { projectId } = useParams();
  // add loading and error
  const [, setBackground] = useGlobalState('background');
  const { data, loading } = useProject(projectId);
  const { fields } = data;

  useEffect(() => {
    if (fields) {
      setBackground(fields.color);
    }

    return () => setBackground();
  }, [fields]);

  if (loading) {
    return null;
  }

  const { projectName } = fields;

  return (
    <Wrapper>
      <h2>
        {projectName}
      </h2>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
