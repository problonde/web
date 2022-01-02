import { useFetch } from 'use-http';

import {
  CONTENTFUL_SPACE,
  CONTENTFUL_TOKEN,
  CONTENTFUL_URL,
} from '../components/constants';

export const useLinks = () => {
  const url = contentfulUrl('link');
  const { data = { items: [] }, error, loading } = useFetch(url, {}, []);

  return { data, error, loading };
};

export const useProjects = () => {
  const url = contentfulUrl('project');
  const { data = { items: [] }, error, loading } = useFetch(url, {}, []);

  return { data, error, loading };
};

export const useProject = (projectId) => {
  const url = contentfulUrl('project', projectId);
  const { data = {}, error, loading } = useFetch(url, {}, []);

  return { data, error, loading };
};

const contentfulUrl = (type, id = null) => {
  const base = `${CONTENTFUL_URL}/spaces/${CONTENTFUL_SPACE}/`;
  if (id) {
    return `${base}entries/${id}?access_token=${CONTENTFUL_TOKEN}`;
  }
  return `${base}entries?access_token=${CONTENTFUL_TOKEN}&content_type=${type}`;
};
