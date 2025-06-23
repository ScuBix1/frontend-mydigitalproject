import AddUser from '@/assets/icons/AddUser';
import Grid from '@/assets/icons/Grid';
import Human from '@/assets/icons/Human';
import { Link } from 'react-router-dom';

interface TutorNavigationProps {
  className?: string;
}

const TutorNavigation = (props: TutorNavigationProps) => {
  const { className } = props;

  const linkClassName =
    'flex items-center gap-2 hover:text-[var(--orange-primary)] hover:[&>svg>path]:fill-[var(--orange-primary)]';

  return (
    <nav className={className}>
      <ul className='flex flex-col gap-y-12'>
        <li>
          <Link to='/tutor/dashboard' className={linkClassName}>
            <Grid className='w-[30px] h-[30px]' /> Tableau de bord
          </Link>
        </li>
        <li>
          <Link to='/tutor/add-student' className={linkClassName}>
            <AddUser className='w-[30px] h-[30px]' /> Ajouter un enfant
          </Link>
        </li>
        <li>
          <Link to='/tutor/all-students' className={linkClassName}>
            <Human className='w-[30px] h-[30px]' /> Liste enfants
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default TutorNavigation;
