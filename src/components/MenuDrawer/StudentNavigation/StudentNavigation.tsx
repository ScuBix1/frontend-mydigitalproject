import Grid from '@/assets/icons/Grid';
import Button from '@/components/Button/Button';
import { useNavigate } from 'react-router-dom';

interface StudentNavigationProps {
  className?: string;
}

const StudentNavigation = (props: StudentNavigationProps) => {
  const { className } = props;
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/tutor/check', {
      state: { redirectTo: `/tutor/dashboard` },
    });
  };

  return (
    <nav className={className}>
      <ul className='flex flex-col gap-y-12'>
        <li>
          <Button onClick={handleLogout} variant='noStyle'>
            <span className={'flex items-center gap-2'}>
              <Grid className='w-[30px] h-[30px]' /> Espace tuteur
            </span>
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default StudentNavigation;
