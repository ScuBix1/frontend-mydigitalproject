import ArrowCircle from '@/assets/icons/ArrowCircle';
import InOut from '@/assets/icons/InOut';
import Profile from '@/assets/icons/Profile';

interface TutorNavigationProps {
  className?: string;
}

const TutorNavigation = (props: TutorNavigationProps) => {
  const { className } = props;

  return (
    <nav className={className}>
      <ul className='flex flex-col gap-y-12'>
        <li>
          <a href='' className={'flex items-center gap-2'}>
            <Profile className='w-[30px] h-[30px]' /> Mon profil
          </a>
        </li>
        <li>
          <a href='' className={'flex items-center gap-2'}>
            <ArrowCircle className='w-[30px] h-[30px]' /> Abonnement
          </a>
        </li>
        <li>
          <a href='' className={'flex items-center gap-2'}>
            <InOut className='w-[30px] h-[30px]' /> Déconnexion
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default TutorNavigation;
