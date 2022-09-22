export type ProjectSys = {
  id: string;
};

export type ProjectFields = {
  color: string;
  mainImage: {
    sys: ProjectSys;
  };
  projectName: string;
};

export type ProjectData = {
  sys: ProjectSys;
  fields: ProjectFields;
};
