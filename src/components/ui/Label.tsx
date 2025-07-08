import clsx from "clsx";

function Label({
  className,
  children,
  ...props
}: React.ComponentProps<"label">) {
  return (
    <label
      className={clsx(
        "flex items-center gap-2 text-sm text-muted leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className,
      )}
      {...props}
    >
      {children}
    </label>
  );
}
export { Label };
