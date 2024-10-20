import { forwardRef } from "react";
import "./styles.css";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const AInputSearch = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type="text"
        className="search input"
        placeholder="Type city name"
        ref={ref}
        {...props}
      />
    );
  }
);
