import Header from '@/components/Header/Header';
import clsx from 'clsx';
import { PropsWithChildren } from 'react';

interface ConnectedTemplateProps extends PropsWithChildren {
  headerContent?: React.ReactNode;
  className?: string;
}

const ConnectedTemplate = (props: ConnectedTemplateProps) => {
  const { headerContent, children, className } = props;
  return (
    <div className={clsx('min-h-screen flex flex-col', className)}>
      <Header>{headerContent}</Header>
      <main>{children}</main>
    </div>
  );
};

export default ConnectedTemplate;
