import { Victories } from '@/components/Games/Victories/Victories';
import { useParams } from 'react-router-dom';

const Victory = () => {
  const { id } = useParams();
  const VictoryComponent = id && Victories[id];

  if (!VictoryComponent) return <div>Jeu introuvable pour l'id {id}</div>;

  return <VictoryComponent />;
};

export default Victory;
