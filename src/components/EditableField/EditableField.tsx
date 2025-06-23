import Pen from '@/assets/icons/Pen';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import Button from '../Button/Button';

interface EditableFieldProps {
  icon?: React.ReactNode;
  label: string;
  value: string;
  onChange: (value: string) => void;
  isPassword?: boolean;
  error?: string;
}

const EditableField = (props: EditableFieldProps) => {
  const { icon, label, value, onChange, isPassword = false, error } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [tempValue, setTempValue] = useState(value);

  const handleEdit = () => {
    setTempValue(value);
    setIsEditing(true);
  };

  const handleCancel = () => {
    setTempValue(value);
    setIsEditing(false);
  };

  const handleValidate = () => {
    onChange(tempValue);
    setIsEditing(false);
  };

  return (
    <div className='flex items-end justify-between gap-4 p-2 w-fit md:items-center'>
      <div className='flex flex-col gap-2 md:flex-row md:items-center'>
        <div className='flex flex-col items-start justify-center gap-2 md:flex-row md:items-center'>
          {icon}
          <span className='font-medium'>{label} :</span>
        </div>

        <div>
          {isEditing ? (
            <Input
              type={isPassword ? 'text' : 'text'}
              value={tempValue}
              onChange={(e) => setTempValue(e.target.value)}
              autoFocus
              className='h-[30px] w-[200px]'
            />
          ) : (
            <span>{isPassword ? '•'.repeat(Math.min(10, 10)) : value}</span>
          )}
        </div>
      </div>

      {isEditing ? (
        <div className='flex gap-2'>
          <Button
            onClick={handleValidate}
            variant='icon'
            className='flex items-center justify-center bg-[var(--green-primary)] w-[30px] h-[30px] px-1 py-1'
          >
            <i className='fa-solid fa-check text-[12px]'></i>
          </Button>
          <Button
            onClick={handleCancel}
            variant='icon'
            className='flex items-center justify-center bg-[var(--pink-secondary)] w-[30px] h-[30px] px-1 py-1'
          >
            <i className='fa-solid fa-xmark text-[12px]'></i>
          </Button>
        </div>
      ) : (
        <Button
          className='cursor-pointer p-1'
          onClick={handleEdit}
          aria-label='Éditer'
        >
          <Pen className='w-[18px] h-[18px] [&>path]:fill-[var(--foreground-secondary)]' />
        </Button>
      )}
      {error && (
        <span className='flex text-red-500 text-[0.7rem] italic absolute bottom-0 translate-x-1/18 leading-[11px]'>
          {error}
        </span>
      )}
    </div>
  );
};

export default EditableField;
