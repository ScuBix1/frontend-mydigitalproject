import Game1 from './Game1/Game1';
import Game2 from './Game2/Game2';

export const Games: Record<string, React.FC> = {
  '1': Game1,
  '2': Game2,
};
