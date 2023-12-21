import { HTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

// definition of multiple variants for the button
const typoVariants = cva(
  "text-center leading-tight",
  {
    variants: {
      variant: {
        default: "text-xl text-gray-600 ",
        nav:"text-lg text-gray-600",
        sm:"text-gray-400 text-sm",
        lg:" text-3xl md:text-4xl lg:text-5xl",
        base:"text-base text-gray-800"
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface typographyProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof typoVariants> {}
const Typography = forwardRef<HTMLHeadingElement, typographyProps>(
  ({ className, children, variant, ...props }, ref) => {
    return (
      <p ref={ref} {...props} className={cn(typoVariants({ variant, className }))}>
        {children}
      </p>
    );
  }
);

Typography.displayName = "Typography";

export default Typography;
