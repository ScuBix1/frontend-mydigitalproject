import { tv } from 'tailwind-variants';

const buttonVariant = tv({
  base: 'rounded-[20px] px-8 py-2 cursor-pointer',
  variants: {
    variant: {
      primary: 'bg-[var(--orange-primary)] text-[var(--foreground-secondary)]',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: 'primary';
}

const Button = (props: ButtonProps) => {
  const { className, children, variant, ...propsButton } = props;

  return (
    <button className={buttonVariant({ variant, className })} {...propsButton}>
      {children}
    </button>
  );
};

export default Button;
