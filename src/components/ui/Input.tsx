import { InputHTMLAttributes, forwardRef } from "react";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  wrapperClassName?: string;
  labelClassName?: string;
  error?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, wrapperClassName, labelClassName, id, className, error, ...props },
  ref,
) {
  const input = (
    <input
      ref={ref}
      id={id}
      className={[className, error ? "is-invalid" : ""]
        .filter(Boolean)
        .join(" ")}
      aria-invalid={error ? true : undefined}
      {...props}
    />
  );

  if (!label) {
    return input;
  }

  return (
    <div className={wrapperClassName}>
      <label htmlFor={id} className={labelClassName}>
        {label}
      </label>
      {input}
      {error && <div className="invalid-feedback d-block">{error}</div>}
    </div>
  );
});

export default Input;
