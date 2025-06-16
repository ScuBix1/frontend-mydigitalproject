import { useAllSubscriptions } from '@/api/subscription/allSubscriptions/useAllSubscriptions';
import { useCheckoutSession } from '@/api/tutor/checkoutSession/useCheckoutSession';
import Star from '@/assets/icons/Star';
import { useAuthContext } from '@/context/auth/useAuthContext';
import Button from '../Button/Button';

const Subscription = () => {
  const { mutate } = useCheckoutSession();
  const { data: subscriptions } = useAllSubscriptions();
  console.log(subscriptions);
  const { user } = useAuthContext();

  const handleClick = () => {
    if (user && user.customer_id && subscriptions) {
      mutate({
        price_id: subscriptions[0].stripe_price_id,
        customer_id: user.customer_id,
      });
    }
  };

  return (
    <div className='min-h-[100dvh] flex flex-col justify-center items-center'>
      <div className='flex flex-col items-center justify-center gap-y-8 text-center mx-10'>
        <h1 className='flex  items-center text-walter gap-2 text-h1'>
          <Star className='w-[40px]' /> Acceder a la version payante
        </h1>
        <p className='text-walter font-normal text-[30px]'>
          Essayez Math & Magique sans engagement et résiliez à tout moment.
        </p>
        <img
          src='/assets/images/geometry.png'
          alt='forme géometrique'
          className='w-[280px] md:w-[320px] lg:w-[450px]'
        />
        <p className='text-poppins font-normal'>
          Accès illimité niveau 1 gratuit, puis{' '}
          <span className='font-bold'>9,99€ /mois</span>
        </p>
        <Button onClick={handleClick}>Commencer</Button>
      </div>
    </div>
  );
};

export default Subscription;
