import useActiveSubscription from '@/api/tutor/getSubscriptionStatus/useActiveSubscription';
import ArrowRight from '@/assets/icons/ArrowRight';
import Button from '@/components/Button/Button';
import { useAuthContext } from '@/context/auth/useAuthContext';
import { useNavigate } from 'react-router-dom';

const Victory1 = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const { data: subscription } = useActiveSubscription(user?.id);

  const handleClick = (subscription?: { subscription_active: boolean }) => {
    console.log(subscription);
    if (subscription && !subscription.subscription_active) {
      navigate('/tutor/check', {
        state: { redirectTo: `/student/subscription` },
      });
    }
  };

  return (
    <div className='w-full min-h-[100dvh] bg-[var(--orange-secondary)] flex flex-col items-center justify-center  gap-5 px-3'>
      <h1 className='text-[50px] md:text-[100px] text-walter text-center'>
        Tu as gagné une médaille !
      </h1>
      <img
        src='/assets/images/color-medal.png'
        alt='boules souriantes victorieuses'
        className='w-[256px]'
      />
      <Button className='px-[100px]' onClick={() => handleClick(subscription)}>
        <ArrowRight className='w-[40px]' />
      </Button>
    </div>
  );
};

export default Victory1;
