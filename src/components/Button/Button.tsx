interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: 'primary';
}

const Button = (props: ButtonProps) => {
  const { className, children, variant, ...propsButton } = props;

  return (
    <button className={className} {...propsButton}>
      {children}
    </button>
  );
};

export default Button;
