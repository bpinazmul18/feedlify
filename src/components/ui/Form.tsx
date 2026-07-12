import { FormHTMLAttributes, ReactNode } from "react";

type FormProps = Omit<FormHTMLAttributes<HTMLFormElement>, "onSubmit"> & {
  onSubmit: FormHTMLAttributes<HTMLFormElement>["onSubmit"];
  children: ReactNode;
};

export default function Form({ onSubmit, children, ...formProps }: FormProps) {
  return (
    <form {...formProps} noValidate onSubmit={onSubmit}>
      {children}
    </form>
  );
}
