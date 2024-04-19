import classNames from "classnames";
import React, { Fragment } from "react";
import styles from "./Paragraph.module.css";

type Text = {
  nodeType: "text";
  value: string;
};

type Hyperlink = {
  nodeType: "hyperlink";
  content: [Text];
  data: {
    uri: string;
  };
};

type Content = Text | Hyperlink;

type Props = {
  content: Content[];
  className?: string;
};

function contentToTag(content: Content) {
  switch (content.nodeType) {
    case "text":
      return <Fragment key={content.value}>{content.value}</Fragment>;
    case "hyperlink":
      return (
        <a
          className={styles.link}
          key={content.data.uri}
          href={content.data.uri}
        >
          {content.content[0].value}
        </a>
      );
    default:
      return null;
  }
}

export function Paragraph({ className, content }: Props) {
  return (
    <p className={classNames(styles.paragraph, className)}>
      {content.map((inner: Content) => contentToTag(inner))}
    </p>
  );
}
