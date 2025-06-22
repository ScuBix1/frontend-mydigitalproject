import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface SubscriptionCardProps {
  className?: string;
  title?: string;
  subTitle?: string;
  price?: number;
  period?: string;
  button?: ReactNode;
  isSubscribed?: boolean;
}

const SubscriptionCard = (props: SubscriptionCardProps) => {
  const { className, title, subTitle, price, period, button, isSubscribed } =
    props;

  return (
    <div
      className={cn(
        'flex flex-col max-w-[280px] h-[400px] text-[1.5rem] gap-y-10 border border-[var(--gray-primary)] rounded-2xl px-7 py-8 shadow-[2px_10px_var(--gray-primary)]',
        { 'bg-[var(--grey-secondary)] h-[450px]': isSubscribed },
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
      {button}
    </div>
  );
};

export default SubscriptionCard;
