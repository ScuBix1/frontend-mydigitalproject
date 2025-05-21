const formatDateToISO = (date: string): string => {
  const [day, month, year] = date.split('/');
  if (!day || !month || !year) return '';

  const isoDate = new Date(
    Date.UTC(Number(year), Number(month) - 1, Number(day))
  );
  if (isNaN(isoDate.getTime())) return '';

  return isoDate.toISOString();
};

export default formatDateToISO;
