import { HTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { Balancer } from "react-wrap-balancer";

// definition of multiple variants for the heading component
const headingVariants = cva(
  "text-black dark:text-white text-center leading-tight ",
  {
    variants: {
      variant: {
        sm: "text-3xl md:text-4xl lg:text-5xl font-bold",
        default: "text-4xl md:text-5xl lg:text-6xl font-extrabold",
        lg: "text-5xl md:text-6xl lg:text-7xl font-black text-gray-800 ",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface headingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}
const Heading = forwardRef<HTMLHeadingElement, headingProps>(
  ({ className, children, variant, ...props }, ref) => {
    return variant == "default" ? (
      // Place an h2 element for default variant
      <h2
        ref={ref}
        {...props}
        className={cn(headingVariants({ variant, className }))}
      >
        <Balancer>{children}</Balancer>
      </h2>
    ) : (
      // Place an h1 element for large variant
      <h1
        ref={ref}
        {...props}
        className={cn(headingVariants({ variant, className }))}
      >
        <Balancer>{children}</Balancer>
      </h1>
    );
  }
);

Heading.displayName = "Heading";

export default Heading;
