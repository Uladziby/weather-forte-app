import { type ReactNode, CSSProperties } from "react";
import "./styles.css";

export const ATitle = ({
  children,
  styles,
}: {
  children: ReactNode;
  styles?: CSSProperties;
}) => {
  return (
    <h2 className="title" style={styles}>
      {children}
    </h2>
  );
};
