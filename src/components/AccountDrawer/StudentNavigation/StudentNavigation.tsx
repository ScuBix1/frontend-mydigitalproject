import InOut from '@/assets/icons/InOut';
import Profile from '@/assets/icons/Profile';
import Button from '@/components/Button/Button';
import { useAuth } from '@/context/auth/AuthContext';
import { Link } from 'react-router-dom';

interface StudentNavigationProps {
  className?: string;
}

const StudentNavigation = (props: StudentNavigationProps) => {
  const { className } = props;
  const { logout } = useAuth();

  return (
    <nav className={className}>
      <ul className='flex flex-col gap-y-12'>
        <li>
          <a href='/tutor/profile' className={'flex items-center gap-2'}>
            <Profile className='w-[30px] h-[30px]' /> Voir profil
          </a>
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

export default StudentNavigation;
