import * as Select from '@radix-ui/react-select';
import clsx from 'clsx';
import Button from '../Button/Button';

interface CustomSelectButtonProps {
  options: { label: string; value: string }[];
  value?: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const CustomSelectButton = ({
  options,
  value,
  onValueChange,
  placeholder = 'Sélectionner',
  className,
}: CustomSelectButtonProps) => {
  return (
    <Select.Root value={value} onValueChange={onValueChange}>
      <Select.Trigger
        className={clsx(
          'flex items-center justify-between min-w-[180px]',
          className
        )}
      >
        <Button asChild>
          <Select.Value placeholder={placeholder} />
          <Select.Icon></Select.Icon>
        </Button>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          className='bg-white rounded-md shadow-lg border border-[var(--foreground-primary)] mt-2 z-50'
          sideOffset={5}
        >
          <Select.Viewport className='p-2'>
            {options.map((opt) => (
              <Select.Item
                key={opt.value}
                value={opt.value}
                className='px-4 py-2 rounded-md cursor-pointer hover:bg-[var(--orange-primary)] hover:text-[var(--foreground-primary)]'
              >
                <Select.ItemText>{opt.label}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export default CustomSelectButton;
