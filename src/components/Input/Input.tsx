import { InputHTMLAttributes, forwardRef } from "react";
import { StyledInput } from "./StyledInput";

interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = forwardRef<HTMLInputElement, iInputProps>(
  ({ label, src, placeholder, ...rest }, ref) => {
    return (
      <StyledInput>
        <label>{label}</label>
        <div>
          <img src={src} alt="" />
          <input placeholder={placeholder} ref={ref} {...rest} />
        </div>
      </StyledInput>
    );
  }
);

export default Input;
