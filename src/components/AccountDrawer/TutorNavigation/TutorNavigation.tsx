import ArrowCircle from '@/assets/icons/ArrowCircle';
import InOut from '@/assets/icons/InOut';
import Profile from '@/assets/icons/Profile';
import Button from '@/components/Button/Button';
import { useAuthContext } from '@/context/auth/useAuthContext';
import { Link } from 'react-router-dom';

interface TutorNavigationProps {
  className?: string;
}

const TutorNavigation = (props: TutorNavigationProps) => {
  const { className } = props;
  const { logout } = useAuthContext();

  return (
    <nav className={className}>
      <ul className='flex flex-col gap-y-12'>
        <li>
          <Link to='/tutor/profile' className={'flex items-center gap-2'}>
            <Profile className='w-[30px] h-[30px]' /> Mon profil
          </Link>
        </li>
        <li>
          <Link to='/tutor/subscription' className={'flex items-center gap-2'}>
            <ArrowCircle className='w-[30px] h-[30px]' /> Abonnement
          </Link>
        </li>
        <li>
          <Button onClick={logout} variant='noStyle' asChild>
            <Link to='/signin' className={'flex items-center gap-2'}>
              <InOut className='w-[30px] h-[30px]' /> Déconnexion
            </Link>
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default TutorNavigation;
