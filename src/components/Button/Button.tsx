import { Slot } from '@radix-ui/react-slot';
import { tv } from 'tailwind-variants';

const buttonVariant = tv({
  base: 'rounded-[20px] px-8 py-2 cursor-pointer',
  variants: {
    variant: {
      primary: 'bg-[var(--orange-primary)] text-[var(--foreground-secondary)]',
      icon: 'bg-transparent',
      link: 'bg-transparent underline',
      header:
        'bg-[var(--background-primary)] flex items-center justify-center text-[var(--foreground-primary)] rounded-full p-3 w-fit h-fit',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: 'primary' | 'icon' | 'link' | 'header';
  asChild?: boolean;
}

const Button = (props: ButtonProps) => {
  const { className, children, variant, asChild = false, ...rest } = props;
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp className={buttonVariant({ variant, className })} {...rest}>
      {children}
    </Comp>
  );
};

export default Button;
