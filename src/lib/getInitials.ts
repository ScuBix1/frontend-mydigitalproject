const getInitials = (firstname?: string, lastname?: string): string => {
  const firstInitial = firstname?.charAt(0).toUpperCase() || '';
  const lastInitial = lastname?.charAt(0).toUpperCase() || '';
  return `${firstInitial} ${lastInitial}`;
};

export default getInitials;
