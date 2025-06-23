interface WaveProps {
  className?: string;
}

const Wave = (props: WaveProps) => {
  const { className } = props;

  return (
    <svg
      viewBox='0 0 1440 350'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M814.964 60.2622C1052.82 -7.41162 1440 0.262207 1440 0.262207V515L0 515V276.262C0 276.262 205.537 298.247 334.964 276.262C533.936 242.465 619.669 115.826 814.964 60.2622Z'
        fill='#E3EEFB'
      />
      <path
        d='M814.964 80.2622C1052.82 12.5884 1440 20.2622 1440 20.2622V515L0 515V296.262C0 296.262 205.537 318.247 334.964 296.262C533.936 262.465 619.669 135.826 814.964 80.2622Z'
        fill='#1669B3'
      />
    </svg>
  );
};

export default Wave;
