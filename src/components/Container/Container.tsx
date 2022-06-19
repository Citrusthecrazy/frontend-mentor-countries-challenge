import React, { FC } from "react";
import "./Container.scss";

interface IContainer {
  children: JSX.Element | JSX.Element[] | string;
  className?: string;
}

const Container: FC<IContainer> = ({ children, className }) => {
  return <div className={`container ${className}`}>{children}</div>;
};

export default Container;
