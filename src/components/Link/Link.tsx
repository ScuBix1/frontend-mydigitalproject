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
}

const Link = (props: LinkProps) => {
  const {
    className,
    variant,
    href,
    isNewTarget = false,
    children,
    ...propsLink
  } = props;

  return (
    <a
      className={linkVariant({ variant, className })}
      href={href}
      target={isNewTarget ? '_blank' : '_self'}
      {...propsLink}
    >
      {children}
    </a>
  );
};

export default Link;
