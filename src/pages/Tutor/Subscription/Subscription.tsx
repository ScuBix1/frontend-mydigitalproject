import { useAllSubscriptions } from '@/api/subscription/allSubscriptions/useAllSubscriptions';
import { useCheckoutSession } from '@/api/tutor/checkoutSession/useCheckoutSession';
import SubscriptionCard from '@/components/SubscriptionCard/SubsciptionCard';
import { useAuthContext } from '@/context/auth/useAuthContext';
import ConnectedTemplate from '@/template/ConnectedTemplate';
import Button from '../../../components/Button/Button';

const Subscription = () => {
  const { mutate } = useCheckoutSession();
  const { user } = useAuthContext();
  const { data: subscriptions } = useAllSubscriptions();

  const handleClick = (priceId: string) => {
    if (user && user.customer_id) {
      mutate({
        price_id: priceId,
        customer_id: user.customer_id,
      });
    }
  };

  if (!subscriptions) {
    return null;
  }

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
        {subscriptions.map((subscription, index) => {
          const subTitle =
            subscription.type === 'weekly'
              ? 'Hebdomadaire'
              : subscription.type === 'monthly'
              ? 'Mensuel'
              : subscription.type === 'annual'
              ? 'Annuel'
              : undefined;
          const period =
            subscription.type === 'weekly'
              ? 'semaine'
              : subscription.type === 'monthly'
              ? 'mois'
              : subscription.type === 'annual'
              ? 'an'
              : undefined;
          return (
            <SubscriptionCard
              key={`abonnement-${index}`}
              title={'Abonnement'}
              subTitle={subTitle}
              price={subscription.price}
              period={period}
              button={
                <Button
                  onClick={() => handleClick(subscription.stripe_price_id)}
                >
                  Choisir
                </Button>
              }
            />
          );
        })}
      </div>
    </ConnectedTemplate>
  );
};

export default Subscription;
