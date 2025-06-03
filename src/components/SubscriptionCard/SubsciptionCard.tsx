import { cn } from '@/lib/utils';
import Button from '../Button/Button';

interface SubscriptionCardProps {
  className?: string;
  title?: string;
  subTitle?: string;
  price?: number;
  period?: string;
  textButton?: string;
}

const SubscriptionCard = (props: SubscriptionCardProps) => {
  const { className, title, subTitle, price, period, textButton } = props;

  return (
    <div
      className={cn(
        'flex flex-col max-w-[280px] text-[1.5rem] gap-y-10 border border-[var(--gray-primary)] b rounded-2xl px-7 py-8 shadow-[2px_10px_var(--gray-primary)]',
        className
      )}
    >
      <div className='flex flex-col items-center justify-center'>
        <span className='text-[var(--orange-primary)]'>{title}</span>
        <span>{subTitle}</span>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <span className='text-[var(--orange-primary)] text-[2.25rem]'>{`${price} €`}</span>
        <span>/{period}</span>
      </div>
      <Button className='text-[1.25rem]'>{textButton}</Button>
    </div>
  );
};

export default SubscriptionCard;
