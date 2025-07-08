function Input({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      className={`placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground bg-input text-input-foreground border border-border-strong flex h-10 w-full min-w-0 rounded-md px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-primary focus-visible:ring-primary/50 focus-visible:ring-[3px] aria-invalid:ring-error/20 aria-invalid:border-error ${className}`}
      {...props}
    />
  );
}

export default Input;
