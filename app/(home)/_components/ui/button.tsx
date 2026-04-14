import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "items-center justify-center rounded-2xl ease-in-out duration-200",
  {
    variants: {
      variant: {
        default:
          "bg-[#0D8C5E] hover:bg-[#0D8C5E]/95 text-white border border-transparent",
        outline:
          "bg-transparent hover:bg-[#5D5D5D]/5 text-[#5D5D5D] border border-[#5D5D5D]",
      },
      size: {
        default: "font-semibold px-7 py-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
