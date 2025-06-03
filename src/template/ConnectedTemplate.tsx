import Header from '@/components/Header/Header';
import clsx from 'clsx';
import { PropsWithChildren } from 'react';

interface ConnectedTemplateProps extends PropsWithChildren {
  headerContent?: React.ReactNode;
  className?: string;
  isDashboard?: boolean;
  isTutor?: boolean;
}

const ConnectedTemplate = (props: ConnectedTemplateProps) => {
  const { headerContent, children, isDashboard, isTutor, className } = props;
  return (
    <div className={clsx('min-h-screen flex flex-col', className)}>
      <Header isDashboard={isDashboard} isTutor={isTutor}>
        {headerContent}
      </Header>
      <main className='flex flex-col px-3 py-10 flex-1'>{children}</main>
    </div>
  );
};

export default ConnectedTemplate;
