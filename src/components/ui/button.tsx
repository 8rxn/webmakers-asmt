import { cn } from "../../lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React, { forwardRef } from "react";

export const buttonVariants = cva(
  "active:scale-95 inline-flex justify-center items-center rounded-md text-sm font-medium transition-color focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900",
  {
    variants: {
      variant: {
        default:
          "bg-gray-800 text-gray-50 hover:bg-gray-700 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100",
        outline:
          "border-gray-800 border text-gray-800 hover:bg-gray-50 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100  hover:bg-slate-100 dark:border-slate-700",
      },
      size: {
        default: "px-8 py-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ className, children, variant, size, isLoading, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;