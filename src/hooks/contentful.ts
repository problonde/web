import { useFetch } from "use-http";

import {
  CONTENTFUL_SPACE,
  CONTENTFUL_TOKEN,
  CONTENTFUL_URL,
} from "../components/constants";

const BASE = `${CONTENTFUL_URL}/spaces/${CONTENTFUL_SPACE}/`;

export const useLinks = () => {
  const url = entryUrl("link");
  const { data = { items: [] }, error, loading } = useFetch(url, {}, []);

  return { data, error, loading };
};

export const useProjects = () => {
  const url = entryUrl("project");
  const { data = { items: [] }, error, loading } = useFetch(url, {}, []);

  return { data, error, loading };
};

export const useProject = (projectId: string) => {
  const url = entryUrl("project", projectId);
  const { data = {}, error, loading } = useFetch(url, {}, []);

  return { data, error, loading };
};

export const useSimplePage = (pageId: string) => {
  const url = entryUrl("simplePage", pageId);
  const { data = {}, error, loading } = useFetch(url, {}, []);

  return { data, error, loading };
};

export const useAsset = (assetId: string) => {
  const url = assetUrl(assetId);
  const { data = {}, error, loading } = useFetch(url, {}, []);

  return { data, error, loading };
};

const assetUrl = (id: string) => `${BASE}assets/${id}?access_token=${CONTENTFUL_TOKEN}`;

const entryUrl = (type: string, id: string | null = null) => {
  if (id) {
    return `${BASE}entries/${id}?access_token=${CONTENTFUL_TOKEN}`;
  }
  return `${BASE}entries?access_token=${CONTENTFUL_TOKEN}&content_type=${type}`;
};
