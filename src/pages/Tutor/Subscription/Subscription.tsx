import { useCheckoutSession } from '@/api/tutor/checkoutSession/useCheckoutSession';
import SubscriptionCard from '@/components/SubscriptionCard/SubsciptionCard';
import { useAuth } from '@/context/auth/AuthContext';
import ConnectedTemplate from '@/template/ConnectedTemplate';
import Button from '../../../components/Button/Button';

const Subscription = () => {
  const { mutate } = useCheckoutSession();
  const { user } = useAuth();
  console.log(user);

  const handleClick = () => {
    if (user && user.customer_id) {
      mutate({
        price_id: 'price_1R5pEU05l0JrObEhBIpXNJB7',
        customer_id: user.customer_id,
      });
    }
  };

  return (
    <ConnectedTemplate
      headerContent={
        <>
          <h1 className='text-h1 text-secondary'>Abonnement</h1>
        </>
      }
      isTutor
    >
      <div className='flex flex-wrap gap-5 justify-center'>
        <SubscriptionCard
          title='Abonnement'
          subTitle='Mensuel'
          price={9.99}
          period='mois'
          button={<Button onClick={handleClick}>Choisir</Button>}
        />
        <SubscriptionCard
          title='Abonnement'
          subTitle='Mensuel'
          price={9.99}
          period='mois'
          button={<Button onClick={handleClick}>Choisir</Button>}
        />
        <SubscriptionCard
          title='Abonnement'
          subTitle='Mensuel'
          price={9.99}
          period='mois'
          button={<Button onClick={handleClick}>Choisir</Button>}
        />
      </div>
    </ConnectedTemplate>
  );
};

export default Subscription;
