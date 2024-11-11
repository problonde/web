import React from "react";
import classNames from "classnames";
import { ProjectType, ProjectTypeValues } from "../../types";
import styles from "./Filter.module.css";

type Props = {
  filter: ProjectType | null;
  setFilter: (type: ProjectType | null) => void;
};
export function Filter({ filter, setFilter }: Props) {
  const wrapClick = (callback: () => void) => (e: any) => {
    e.preventDefault();
    callback();
  };

  return (
    <div className={styles.wrapper}>
      {ProjectTypeValues.map((type) => (
        <a
          className={classNames(styles.link, {
            [styles.active]: type === filter,
          })}
          href="#"
          key={`p-filt-${type}`}
          onClick={wrapClick(() => setFilter(type === filter ? null : type))}
        >
          {type}
        </a>
      ))}
    </div>
  );
}
