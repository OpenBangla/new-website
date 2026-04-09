import { cn } from "@/lib/cn";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  className,
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "rounded-full border border-transparent bg-[#0D8C5E] px-7 py-4 text-white",
        className,
      )}
    >
      {children}
    </button>
  );
}
