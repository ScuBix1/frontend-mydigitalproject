import useActiveSubscription from '@/api/tutor/getSubscriptionStatus/useActiveSubscription';
import ArrowRight from '@/assets/icons/ArrowRight';
import Button from '@/components/Button/Button';
import { useAuthContext } from '@/context/auth/useAuthContext';
import { useNavigate } from 'react-router-dom';

const Victory2 = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const { data: subscription } = useActiveSubscription(user?.id);

  const handleClick = (subscription?: { subscription_active: boolean }) => {
    if (subscription && !subscription.subscription_active) {
      navigate('/tutor/check', {
        state: { redirectTo: `/student/subscription` },
      });
    }
    navigate('/student/dashboard');
  };

  return (
    <div className='w-full min-h-[100dvh] bg-[var(--pink-tertiary)] flex flex-col items-center justify-center  gap-y-8 px-3'>
      <h1 className='text-[50px] md:text-[100px] text-walter text-center'>
        Tu as gagné une médaille !
      </h1>
      <img
        src='/assets/images/wand.png'
        alt='Récompense Baguette'
        className='w-[200px]'
      />
      <Button className='px-[100px]' onClick={() => handleClick(subscription)}>
        <ArrowRight className='w-[40px]' />
      </Button>
    </div>
  );
};

export default Victory2;
