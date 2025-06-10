import { Games } from '@/components/Games/Games';
import { useParams } from 'react-router-dom';

const GameViewer = () => {
  const { id } = useParams();
  const GameComponent = id && Games[id];

  if (!GameComponent) return <div>Jeu introuvable pour l'id {id}</div>;

  return <GameComponent />;
};

export default GameViewer;
