import { Input, Label, Textarea } from "@/components/ui";
import clsx from "clsx";
import type { HTMLInputTypeAttribute, ReactNode } from "react";
import type { FieldError } from "react-hook-form";

type FormFieldBaseProps = {
  id: string;
  label: string;
  className?: string;
  error: FieldError | undefined;
  children?: ReactNode;
};

type InputProps = React.ComponentProps<"input"> & {
  as?: "input";
};

type TextareaProps = React.ComponentProps<"textarea"> & {
  as?: "textarea";
};

type FormFieldProps = FormFieldBaseProps & (InputProps | TextareaProps);

function FormField({
  id,
  label,
  error,
  className,
  children,
  as = "input",
  ...props
}: FormFieldProps) {
  const FieldComponent = as === "textarea" ? Textarea : Input;
  return (
    <div className={clsx("flex flex-col gap-2", className)}>
      <Label htmlFor={id}>{label}</Label>
      {children ?? (
        <FieldComponent id={id} aria-invalid={!!error} {...(props as any)} />
      )}
      {error && <p className="text-sm text-error">{error.message}</p>}
    </div>
  );
}

export default FormField;
