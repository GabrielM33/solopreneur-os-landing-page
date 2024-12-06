import Link from "next/link";
import { cva, VariantProps } from "class-variance-authority";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import classNames from "classnames";
import { ChevronIcon } from "./icons/chevron";

type ButtonBaseProps = VariantProps<typeof buttonClasses> & {
  children: React.ReactNode;
};

interface ButtonAsAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

interface ButtonAsButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: never;
}

type ButtonProps = ButtonBaseProps &
  (ButtonAsAnchorProps | ButtonAsButtonProps);

const buttonClasses = cva(
  [
    "relative rounded-full inline-flex items-center justify-center gap-2",
    "transition-all duration-300",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-slate-900/80 text-white",
          "border border-slate-700/50",
          "backdrop-blur-sm",
          "shadow-[0_0_0_1px_rgba(82,82,82,0.1)]",
          "hover:shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_0_30px_rgba(255,255,255,0.1)]",
          "hover:border-slate-500/50",
          "before:absolute before:inset-0",
          "before:rounded-full before:bg-gradient-to-r",
          "before:from-transparent-white/10 before:to-transparent",
          "before:opacity-0 before:transition-opacity",
          "hover:before:opacity-100",
          "after:absolute after:-inset-1",
          "after:rounded-full after:opacity-0",
          "after:transition-opacity after:duration-500",
          "after:bg-glow-conic",
          "hover:after:opacity-20",
          "hover:scale-[1.01]",
          "[&_.highlight]:ml-2",
          "[&_svg]:transition-transform",
          "[&_svg]:duration-300",
          "hover:[&_svg]:translate-x-0.5",
          "z-10",
        ],
        secondary: [
          "text-off-white bg-white/5",
          "border border-transparent-white/[0.08]",
          "backdrop-blur-sm",
          "hover:bg-white/10",
          "hover:border-transparent-white/[0.12]",
          "transition-colors ease-in",
          "[&_.highlight]:bg-transparent-white/[0.08] [&_.highlight]:rounded-full [&_.highlight]:px-2",
          "[&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2",
          "[&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2",
        ],
      },
      size: {
        small: "text-xs px-3 h-7",
        medium: "text-sm px-5 h-9",
        large: "text-md px-7 h-12 font-medium",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  }
);

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <span className={classNames("highlight", className)}>{children}</span>;

export const Button = ({ children, variant, size, ...props }: ButtonProps) => {
  const classes = buttonClasses({ variant, size, className: props.className });

  const content = (
    <>
      {children}
      {variant === 'primary' && <ChevronIcon />}
    </>
  );

  if ("href" in props && props.href !== undefined) {
    return (
      <Link {...props} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button {...props} className={classes}>
      {content}
    </button>
  );
};
