import clsx from 'clsx';

interface InputTextProps {
  className?: string;
  id: string;
  textLabel?: string;
  placeholder?: string;
  value?: string;
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
    ...restProps
  } = props;

  return (
    <div className={clsx('flex flex-col gap-y-3', className)}>
      {textLabel && <label htmlFor={id}>{textLabel}</label>}
      <input
        type='text'
        id={id}
        className='border border-[var(--foreground-primary)] max-w-[230px] h-[50px] rounded-[20px] px-[10px] bg-[var(--background-secondary-light)]'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...restProps}
      />
    </div>
  );
};

export default InputText;
