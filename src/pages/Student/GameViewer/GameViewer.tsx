import useActiveSubscription from '@/api/tutor/getSubscriptionStatus/useActiveSubscription';
import { Games } from '@/components/Games/Games';
import { useAuthContext } from '@/context/auth/useAuthContext';
import { useParams } from 'react-router-dom';

const GameViewer = () => {
  const { id } = useParams();
  const GameComponent = id && Games[id];
  const { user } = useAuthContext();
  const { data: subscription } = useActiveSubscription(user?.id);

  if (id && parseInt(id) > 1 && !subscription?.subscription_active) {
    <div>Paye stp !</div>;
  }

  if (!GameComponent) return <div>Jeu introuvable pour l'id {id}</div>;

  return <GameComponent />;
};

export default GameViewer;
