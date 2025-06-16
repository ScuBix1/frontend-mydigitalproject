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
          <Link to='/student/dashboard' className={'flex items-center gap-2'}>
            <i className='fa-solid fa-user text-[30px]'></i> Voir profil
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default StudentNavigation;
