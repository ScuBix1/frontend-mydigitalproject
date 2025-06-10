interface ArrowRightProps {
  className?: string;
}

const ArrowRight = (props: ArrowRightProps) => {
  const { className } = props;

  return (
    <svg
      className={className}
      viewBox='0 0 61 60'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M24.1753 53.6753L30.5 60L60.5 30L30.5 0L24.1753 6.32473L43.3776 25.5271H0.5V34.4729H43.3776L24.1753 53.6753Z'
        fill='black'
      />
    </svg>
  );
};

export default ArrowRight;
