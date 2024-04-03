import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?: string; // instead of using string: 'primary' | 'secondary' | 'danger', ...
  onClick: () => void;
}
const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <>
      <button type="button" onClick={onClick} className={"btn btn-" + color}>
        {children}
      </button>
    </>
  );
};

export default Button;
