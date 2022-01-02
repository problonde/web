import { useFetch } from 'use-http';

import {
  CONTENTFUL_SPACE,
  CONTENTFUL_TOKEN,
  CONTENTFUL_URL,
} from '../components/constants';

export const useProjects = () => {
  const options = {}; // these options accept all native `fetch` options
  const url = contentfulUrl('project');
  const fetch = useFetch(url, options, []);

  return fetch;
};

const contentfulUrl = (type, id = null) => {
  const base = `${CONTENTFUL_URL}/spaces/${CONTENTFUL_SPACE}/`;
  if (id) {
    return `${base}entries/id?access_token=${CONTENTFUL_TOKEN}`;
  }
  return `${base}entries?access_token=${CONTENTFUL_TOKEN}&content_type=${type}`;
};
