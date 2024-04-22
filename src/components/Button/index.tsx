import React, { ButtonHTMLAttributes } from "react";
import "./styles.css";

interface ButtonInterface
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  btnType: "outline-white" | "success" | "white" | "outline-success";
  radius?: number;
}

const Button: React.FC<ButtonInterface> = ({
  btnType,
  children,
  radius,
  ...props
}) => {
  return (
    <button
      style={{ borderRadius: radius }}
      className={`btn btn-${btnType}`}
      {...props}
    >
      <span className="d-flex justify-content-center align-items-center">
        {children}
      </span>
    </button>
  );
};

export default Button;
