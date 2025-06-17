interface NavigatorWithUAData extends Navigator {
  userAgentData?: {
    platform?: string;
  };
}

export function isIOS(): boolean {
  const navigatorWithUA = navigator as NavigatorWithUAData;

  if (navigatorWithUA.userAgentData?.platform === 'iOS') {
    return true;
  }

  const userAgent = navigator.userAgent || navigator.vendor;

  return (
    /iPad|iPhone|iPod/.test(userAgent) ||
    (userAgent.includes('Mac') && 'ontouchend' in window)
  );
}
