import SubscriptionCard from '@/components/SubscriptionCard/SubsciptionCard';
import ConnectedTemplate from '@/template/ConnectedTemplate';

const Subscription = () => {
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
          textButton='Choisir'
        />
        <SubscriptionCard
          title='Abonnement'
          subTitle='Mensuel'
          price={9.99}
          period='mois'
          textButton='Choisir'
        />
        <SubscriptionCard
          title='Abonnement'
          subTitle='Mensuel'
          price={9.99}
          period='mois'
          textButton='Choisir'
        />
      </div>
    </ConnectedTemplate>
  );
};

export default Subscription;
