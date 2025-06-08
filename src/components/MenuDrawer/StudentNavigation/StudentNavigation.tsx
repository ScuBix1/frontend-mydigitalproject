import Grid from '@/assets/icons/Grid';
import { Link } from 'react-router-dom';

interface StudentNavigationProps {
  className?: string;
}

const StudentNavigation = (props: StudentNavigationProps) => {
  const { className } = props;

  return (
    <nav className={className}>
      <ul className='flex flex-col gap-y-12'>
        <li>
          <Link to='/tutor/dashboard' className={'flex items-center gap-2'}>
            <Grid className='w-[30px] h-[30px]' /> Espace tuteur
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default StudentNavigation;
