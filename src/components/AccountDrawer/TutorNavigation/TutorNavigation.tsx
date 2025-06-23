import Euro from '@/assets/icons/Euro';
import InOut from '@/assets/icons/InOut';
import Button from '@/components/Button/Button';
import { useAuthContext } from '@/context/auth/useAuthContext';
import { Link } from 'react-router-dom';

interface TutorNavigationProps {
  className?: string;
}

const TutorNavigation = (props: TutorNavigationProps) => {
  const { className } = props;
  const { logout } = useAuthContext();
  const linkClassName =
    'flex items-center gap-2 hover:text-[var(--orange-primary)] hover:[&>svg>path]:fill-[var(--orange-primary)]';

  return (
    <nav className={className}>
      <ul className='flex flex-col gap-y-12'>
        <li>
          <Link to='/tutor/profile' className={linkClassName}>
            <i className='fa-solid fa-user text-[30px]'></i> Mon profil
          </Link>
        </li>
        <li>
          <Link to='/tutor/subscription' className={linkClassName}>
            <Euro className='w-[30px] h-[30px]' /> Abonnement
          </Link>
        </li>
        <li>
          <Button onClick={logout} variant='noStyle' asChild>
            <Link to='/signin' className={linkClassName}>
              <InOut className='w-[30px] h-[30px]' /> Déconnexion
            </Link>
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default TutorNavigation;
