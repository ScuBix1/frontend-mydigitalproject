import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Button from '../../../../components/Button/Button';

interface SortButtonProps {
  className?: string;
  value: string;
  onChange: (value: string) => void;
}

const SortButton = (props: SortButtonProps) => {
  const { value, onChange } = props;

  return (
    <Select value={value} onValueChange={onChange}>
      <Button asChild>
        <SelectTrigger>
          <SelectValue placeholder='Trier par...' />
        </SelectTrigger>
      </Button>
      <SelectContent>
        <SelectItem value='default'>Enfants</SelectItem>
        <SelectItem value='progression'>Progression</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SortButton;
