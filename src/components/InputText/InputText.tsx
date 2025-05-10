import clsx from 'clsx';

interface InputTextProps {
  className?: string;
  id: string;
  textLabel?: string;
  placeholder?: string;
  value?: string;
  error?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const InputText = (props: InputTextProps) => {
  const {
    className,
    id,
    textLabel,
    placeholder,
    value,
    onChange,
    error,
    ...restProps
  } = props;

  return (
    <div className={clsx('flex flex-col gap-y-3', className)}>
      {textLabel && <label htmlFor={id}>{textLabel}</label>}
      <div className='relative w-[230px] h-[85px]'>
        <input
          type='text'
          id={id}
          className='border border-[var(--foreground-primary)] max-w-[230px] h-[50px] rounded-[20px] px-[10px] bg-[var(--background-secondary-light)] mb-[2rem]'
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          {...restProps}
        />
        {error && (
          <span className='flex text-red-500 text-[0.7rem] italic absolute bottom-0 translate-x-1/18 leading-[11px]'>
            {error}
          </span>
        )}
      </div>
    </div>
  );
};

export default InputText;
