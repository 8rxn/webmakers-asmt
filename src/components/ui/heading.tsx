import { HTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { Balancer } from "react-wrap-balancer";

const headingVariants = cva(
  "text-black dark:text-white text-center leading-tight ",
  {
    variants: {
      size: {
        sm: "text-3xl md:text-4xl lg:text-5xl font-bold",
        default: "text-4xl md:text-5xl lg:text-6xl font-extrabold",
        lg: "text-5xl md:text-6xl lg:text-7xl font-black text-gray-800 ",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface headingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}
const Heading = forwardRef<HTMLHeadingElement, headingProps>(
  ({ className, children, size, ...props }, ref) => {
    return size == "default" ? (
      // Place an h2 element for default size
      <h2
        ref={ref}
        {...props}
        className={cn(headingVariants({ size, className }))}
      >
        <Balancer>{children}</Balancer>
      </h2>
    ) : (
      // Place an h1 element for large size
      <h1
        ref={ref}
        {...props}
        className={cn(headingVariants({ size, className }))}
      >
        <Balancer>{children}</Balancer>
      </h1>
    );
  }
);

Heading.displayName = "Heading";

export default Heading;
