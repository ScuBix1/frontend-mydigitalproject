export function isIOS(): boolean {
  const userAgent =
    navigator.userAgent || navigator.vendor || (window as any).opera;

  const nav = navigator as Navigator & {
    userAgentData?: { platform?: string };
  };

  if (nav.userAgentData?.platform === 'iOS') {
    return true;
  }

  return (
    /iPad|iPhone|iPod/.test(userAgent) ||
    (userAgent.includes('Mac') && 'ontouchend' in document)
  );
}
