import React from "react";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={`border border-border-strong placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-primary/50 aria-invalid:ring-error/20 dark:aria-invalid:ring-error/40 aria-invalid:border-error bg-input text-input-foreground flex field-sizing-content min-h-16 w-full rounded-md px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm ${className}`}
      {...props}
    />
  );
}

export default Textarea;
