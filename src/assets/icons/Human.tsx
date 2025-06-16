interface HumanProps {
  className?: string;
}

const Human = (props: HumanProps) => {
  const { className } = props;

  return (
    <svg
      className={className}
      viewBox='0 0 17 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M8.49998 6C10.1187 6 11.431 4.65685 11.431 3C11.431 1.34315 10.1187 0 8.49998 0C6.88122 0 5.56895 1.34315 5.56895 3C5.56895 4.65685 6.88122 6 8.49998 6Z'
        fill='black'
      />
      <path
        d='M11.431 7.5H5.56897C5.34145 7.5 5.11706 7.55422 4.91357 7.65836C4.71007 7.7625 4.53306 7.91371 4.39655 8.1L0 14.1L2.34483 15.9L4.10345 13.5V24H7.03448V18H9.96552V24H12.8966V13.5L14.6552 15.9L17 14.1L12.6034 8.1C12.4669 7.91371 12.2899 7.7625 12.0864 7.65836C11.8829 7.55422 11.6585 7.5 11.431 7.5Z'
        fill='black'
      />
    </svg>
  );
};

export default Human;
