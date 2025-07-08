import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ForwardedRef,
  type ReactNode,
} from "react";
import clsx from "clsx";

type Variant =
  | "default"
  | "secondary"
  | "primary"
  | "error"
  | "success"
  | "ghost";
type Size = "default" | "sm" | "lg" | "icon";
type Rounded = "default" | "sm" | "lg" | "full" | "none";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  rounded?: Rounded;
  className?: string;
  children: ReactNode;
};

type ButtonProps = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, "className" | "children"> & {
    link?: false;
  };

type AnchorProps = CommonProps &
  Omit<ComponentPropsWithoutRef<"a">, "className" | "children"> & {
    link: true;
  };

type Props = ButtonProps | AnchorProps;

function ButtonFn(
  {
    children,
    variant = "default",
    size = "default",
    rounded = "default",
    className,
    link,
    ...props
  }: Props,
  ref: ForwardedRef<React.ComponentProps<"button"> | React.ComponentProps<"a">>,
) {
  const base = `inline-flex justify-center border border-border items-center font-medium tracking-wide gap-2 whitespace-nowrap transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:selection select-none`;

  const variantClasses: Record<Variant, string> = {
    default: "bg-foreground text-background hover:bg-foreground/80",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    primary:
      "bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground active:bg-accent active:text-accent-foreground",
    error: "bg-error text-error-foreground hover:bg-error/80",
    success: "bg-success text-success-foreground hover:bg-success/80",
    ghost: "bg-foreground/10",
  };

  const sizeClasses: Record<Size, string> = {
    default: "h-10 px-3 text-sm",
    sm: "h-9 px-3 text-sm",
    lg: "h-13 px-6",
    icon: "h-9 w-9 p-1 text-sm",
  };

  const roundedClasses: Record<Rounded, string> = {
    default: "rounded",
    sm: "rounded-xs",
    lg: "rounded-xl",
    none: "",
    full: "rounded-full",
  };

  const compClasses = clsx(
    base,
    variantClasses[variant],
    sizeClasses[size],
    roundedClasses[rounded],
    className,
  );

  if (link) {
    return (
      <a
        ref={ref as ForwardedRef<HTMLAnchorElement>}
        className={compClasses}
        {...(props as AnchorProps)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref as ForwardedRef<HTMLButtonElement>}
      className={compClasses}
      {...(props as ButtonProps)}
    >
      {children}
    </button>
  );
}

const Button = forwardRef(ButtonFn);
export default Button;
