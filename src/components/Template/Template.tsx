import clsx from 'clsx';
import { Outlet } from 'react-router-dom';

interface TemplateProps {
  className?: string;
}

const Template = (props: TemplateProps) => {
  const { className } = props;

  return (
    <div
      className={clsx(
        'h-[100dvh] w-full bg-[url("/assets/images/wave.svg")] bg-no-repeat bg-bottom sm:relative',
        className
      )}
    >
      <Outlet />
    </div>
  );
};

export default Template;
