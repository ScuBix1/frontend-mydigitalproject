const computeProgression = (
  sessionsTab: Session[] | undefined,
  totalGames = 4
) => {
  const sessions = sessionsTab ?? [];
  const scoreTotalObtenu = sessions.reduce((acc, s) => acc + s.score, 0);
  const scoreTotalPossible = totalGames * 100;
  return Math.round((scoreTotalObtenu / scoreTotalPossible) * 100);
};

export default computeProgression;
