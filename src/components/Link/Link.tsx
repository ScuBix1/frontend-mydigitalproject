import { Slot } from '@radix-ui/react-slot';
import { PropsWithChildren } from 'react';
import { tv } from 'tailwind-variants';

const linkVariant = tv({
  base: 'text-base',
  variants: {
    variant: { primary: 'font-bold underline' },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

interface LinkProps
  extends PropsWithChildren<React.HTMLAttributes<HTMLAnchorElement>> {
  className?: string;
  variant?: 'primary';
  href: string;
  isNewTarget?: boolean;
  asChild?: boolean;
}

const Link = (props: LinkProps) => {
  const {
    className,
    variant,
    href,
    isNewTarget = false,
    asChild = false,
    children,
    ...propsLink
  } = props;
  const Comp = asChild ? Slot : 'a';
  const target = isNewTarget ? '_blank' : '_self';
  const finalClassName = linkVariant({ variant, className });

  return (
    <Comp className={finalClassName} href={href} target={target} {...propsLink}>
      {children}
    </Comp>
  );
};

export default Link;
