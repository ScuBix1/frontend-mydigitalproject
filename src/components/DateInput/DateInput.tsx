import clsx from 'clsx';
import { useState } from 'react';

interface DateInputProps {
  id: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  error?: string;
  className?: string;
  label?: string;
}

const formatDate = (value: string) => {
  const numeric = value.replace(/\D/g, '');
  const day = numeric.slice(0, 2);
  const month = numeric.slice(2, 4);
  const year = numeric.slice(4, 8);
  const parts = [day];
  if (month) parts.push(month);
  if (year) parts.push(year);
  return parts.join('/');
};

const DateInput = (props: DateInputProps) => {
  const {
    id,
    value = '',
    onChange,
    placeholder = 'jj/mm/aaaa',
    error,
    className,
    label,
  } = props;
  const [internalValue, setInternalValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    const formatted = formatDate(raw);
    setInternalValue(formatted);
    onChange?.(formatted);
  };

  return (
    <div className={clsx('flex flex-col gap-y-2', className)}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type='text'
        id={id}
        inputMode='numeric'
        maxLength={10}
        value={internalValue}
        onChange={handleChange}
        placeholder={placeholder}
        className={clsx(
          'border border-[var(--foreground-primary)] max-w-[230px] h-[50px] rounded-[20px] px-[10px] bg-[var(--background-secondary-light)] text-sm pr-[50px]',
          error && 'border-red-500'
        )}
      />
      {error && <span className='text-red-500 text-xs italic'>{error}</span>}
    </div>
  );
};

export default DateInput;
