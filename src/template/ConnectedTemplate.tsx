import Header from '@/components/Header/Header';
import { AvatarName } from '@/types/student';
import clsx from 'clsx';
import { PropsWithChildren } from 'react';

interface ConnectedTemplateProps extends PropsWithChildren {
  headerContent?: React.ReactNode;
  className?: string;
  isDashboard?: boolean;
  isTutor?: boolean;
  isStudent?: boolean;
  headerBackgroundColor?: string;
  path?: string;
}

const ConnectedTemplate = (props: ConnectedTemplateProps) => {
  const {
    headerContent,
    children,
    isDashboard,
    isTutor,
    isStudent,
    headerBackgroundColor,
    path,
    className,
  } = props;
  return (
    <div className={clsx('min-h-screen flex flex-col', className)}>
      <Header
        isDashboard={isDashboard}
        isTutor={isTutor}
        isStudent={isStudent}
        headerBackgroundColor={headerBackgroundColor}
        path={path as AvatarName}
      >
        {headerContent}
      </Header>
      <main className='flex flex-col px-3 py-10 flex-1'>{children}</main>
    </div>
  );
};

export default ConnectedTemplate;
