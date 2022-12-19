import React from "react";

interface Props {
  text?: React.ReactNode;
  className: string;
}

const Label: React.FC<Props> = ({
  text,
  className
}) => {
  return (
    <label
      className={className}
    >
      {text}
    </label>
  );
};

export default Label;
