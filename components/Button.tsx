import React from "react";

interface Props {
  text?: React.ReactNode;
  className: string;
  type: "submit";
  onClick: () => void;
  disabled: boolean;
}

const Button: React.FC<Props> = ({
  text,
  className,
  type,
  onClick,
  disabled,
}) => {
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
