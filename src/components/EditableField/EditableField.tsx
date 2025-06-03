import Check from '@/assets/icons/Check';
import Cross from '@/assets/icons/Cross';
import Pen from '@/assets/icons/Pen';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

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
          <button onClick={handleValidate} className='text-green-600'>
            <Check className='w-[30px] h-[30px]' />
          </button>
          <button onClick={handleCancel} className='text-red-600'>
            <Cross className='w-[30px] h-[30px]' />
          </button>
        </div>
      ) : (
        <button
          className='cursor-pointer text-blue-600'
          onClick={handleEdit}
          aria-label='Éditer'
        >
          <Pen className='w-[24px] h-[24px]' />
        </button>
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
