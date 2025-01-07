import React from "react";
import { ContainerProps } from "../types/types";

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="container mx-auto p-4 h-screen w-screen">{children}</div>
  );
};

export default Container;
