import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import clsx from 'clsx';

interface CustomSelectProps {
  selectLabel?: string;
  id?: string;
  placeholder?: string;
  error?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  options: { label: string; value: string }[];
  className?: string;
}

const CustomSelect = (props: CustomSelectProps) => {
  const {
    placeholder = 'Sélectionner',
    selectLabel,
    id,
    value,
    error,
    onValueChange,
    options,
    className,
  } = props;

  return (
    <div className='flex flex-col gap-y-3'>
      {selectLabel && <label htmlFor={id}>{selectLabel}</label>}
      <div className='flex flex-col gap-y-3 h-[85px] relative'>
        <Select value={value} onValueChange={onValueChange}>
          <SelectTrigger
            className={clsx(
              'w-[230px] h-[50px] rounded-[20px] border border-[var(--foreground-primary)] px-4 text-sm bg-[var(--background-secondary-light)] focus:ring-2 focus:ring-offset-2 focus:ring-[var(--orange-primary)] ',
              className
            )}
            id={id}
          >
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent className='rounded-xl border shadow-md z-50 bg-white'>
            <SelectGroup>
              {options.map((opt) => (
                <SelectItem
                  key={opt.value}
                  value={opt.value}
                  className='cursor-pointer px-3 py-2 text-sm rounded-md hover:bg-gray-100 data-[state=checked]:bg-[var(--orange-primary)] data-[state=checked]:text-white'
                >
                  {opt.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        {error && (
          <span className='flex text-red-500 text-[0.7rem] italic absolute bottom-0 translate-x-1/18 leading-[11px]'>
            {error}
          </span>
        )}
      </div>
    </div>
  );
};

export default CustomSelect;
