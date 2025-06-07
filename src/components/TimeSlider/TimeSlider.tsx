import { Slider } from '@/components/ui/slider';

interface TimeSliderProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
}

const TimeSlider = ({
  value,
  onChange,
  min = 5,
  max = 30,
  step = 5,
}: TimeSliderProps) => {
  return (
    <div className='flex flex-col items-start justify-between w-full min-w-[230px] max-w-xl '>
      <span className='font-bold text-[var(--foreground-primary)]'>
        Choisir une durée
      </span>
      <div className='flex items-center gap-4 flex-1 w-full'>
        <Slider
          min={min}
          max={max}
          step={step}
          value={[value]}
          onValueChange={(v) => onChange(v[0])}
          className='w-full h-2 [&_[role=slider]]:bg-[var(--orange-primary)] [&_[role=slider]]:w-5 [&_[role=slider]]:h-5 [&_[role=slider]]:rounded-full [&_[role=slider]]:shadow-none  [&_[role=slider]]:transition'
        />
        <span className='font-bold text-[var(--foreground-primary)] whitespace-nowrap'>
          {value} minutes
        </span>
      </div>
    </div>
  );
};

export default TimeSlider;
