import ArrowCircle from '@/assets/icons/ArrowCircle';
import Grid from '@/assets/icons/Grid';
import Profile from '@/assets/icons/Profile';
import { Link } from 'react-router-dom';

interface TutorNavigationProps {
  className?: string;
}

const TutorNavigation = (props: TutorNavigationProps) => {
  const { className } = props;

  return (
    <nav className={className}>
      <ul className='flex flex-col gap-y-12'>
        <li>
          <Link to='/tutor/dashboard' className={'flex items-center gap-2'}>
            <Grid className='w-[30px] h-[30px]' /> Tableau de bord
          </Link>
        </li>
        <li>
          <Link to='/tutor/add-student' className={'flex items-center gap-2'}>
            <Profile className='w-[30px] h-[30px]' /> Ajouter un enfant
          </Link>
        </li>
        <li>
          <Link to='' className={'flex items-center gap-2'}>
            <Profile className='w-[30px] h-[30px]' /> Liste enfants
          </Link>
        </li>
        <li>
          <Link to='' className={'flex items-center gap-2'}>
            <ArrowCircle className='w-[30px] h-[30px]' /> FAQ
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default TutorNavigation;
