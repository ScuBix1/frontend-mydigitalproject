export const getColorAvatar = (avatar?: string): string => {
  switch (avatar) {
    case 'wizard.png':
    case 'zebra.png':
      return 'var(--blue-primary)';
    case 'robot.png':
      return 'var(--green-primary)';
    case 'cloud.png':
    case 'ladybug.png':
      return 'var(--pink-primary)';
    case 'cat.png':
      return 'var(--orange-primary)';
    default:
      return 'var(--blue-primary)';
  }
};
