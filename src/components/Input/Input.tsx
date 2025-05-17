import clsx from 'clsx';
import { useState } from 'react';
import Button from '../Button/Button';

interface InputProps {
  className?: string;
  id: string;
  textLabel?: string;
  placeholder?: string;
  value?: string;
  error?: string;
  type?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Input = (props: InputProps) => {
  const {
    className,
    id,
    textLabel,
    placeholder,
    value,
    onChange,
    error,
    type,
    ...restProps
  } = props;

  const [visible, setVisible] = useState(false);
  const isPassword = type === 'password';
  const inputType = isPassword && visible ? 'text' : type;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setVisible((prev) => !prev);
  };

  return (
    <div className={clsx('flex flex-col gap-y-3', className)}>
      {textLabel && <label htmlFor={id}>{textLabel}</label>}
      <div className='relative w-[230px] h-[85px]'>
        <div className='relative h-[50px]'>
          <input
            type={isPassword ? inputType : type}
            id={id}
            className={clsx(
              'border border-[var(--foreground-primary)] max-w-[230px] h-[50px] rounded-[20px] px-[10px] bg-[var(--background-secondary-light)] mb-[2rem] overflow-hidden',
              { 'pr-[50px]': isPassword }
            )}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            {...restProps}
          />
          {isPassword && (
            <Button
              className='absolute w-[30px] max-h-[50px] p-0 right-[10px] -translate-y-1/2 top-1/2'
              onClick={handleClick}
              variant='icon'
            >
              {inputType === 'text' ? (
                <i className='fa-regular fa-eye-slash'></i>
              ) : (
                <i className='fa-regular fa-eye'></i>
              )}
            </Button>
          )}
        </div>
        {error && (
          <span className='flex text-red-500 text-[0.7rem] italic absolute bottom-0 translate-x-1/18 leading-[11px]'>
            {error}
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;
