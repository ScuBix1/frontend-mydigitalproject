import ArrowCircle from '@/assets/icons/ArrowCircle';
import Grid from '@/assets/icons/Grid';
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
            <Grid className='w-[30px] h-[30px]' /> Tableau de bord
          </a>
        </li>
        <li>
          <a href='' className={'flex items-center gap-2'}>
            <Profile className='w-[30px] h-[30px]' /> Ajouter un enfant
          </a>
        </li>
        <li>
          <a href='' className={'flex items-center gap-2'}>
            <Profile className='w-[30px] h-[30px]' /> Liste enfants
          </a>
        </li>
        <li>
          <a href='' className={'flex items-center gap-2'}>
            <ArrowCircle className='w-[30px] h-[30px]' /> FAQ
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default TutorNavigation;
