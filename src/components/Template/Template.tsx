import clsx from 'clsx';
import { Outlet } from 'react-router-dom';
import Wave from '../../assets/icons/Wave';

interface TemplateProps {
  className?: string;
}

const Template = (props: TemplateProps) => {
  const { className } = props;

  return (
    <div
      className={clsx(
        'h-full w-full bg-no-repeat bg-bottom relative text-base',
        className
      )}
    >
      <Outlet />
      <div className='absolute w-full h-full bottom-0 -z-1 w-[100vw] overflow-hidden'>
        <div className='relative w-full h-full'>
          <Wave className='absolute bottom-0 lg:min-h-[600px] lg:w-[125vw] xl:min-h-[800px] xl:w-[135vw]' />
        </div>
      </div>
    </div>
  );
};

export default Template;
