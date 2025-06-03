import useStudent from '@/api/student/getStudent/useStudent';
import { useUpdateStudent } from '@/api/student/updateStudent/useUpdateStudent';
import Profile from '@/assets/icons/Profile';
import EditableField from '@/components/EditableField/EditableField';
import Panel from '@/components/Panel/Panel';
import ProgressBar from '@/components/ProgressBar/ProgressBar';
import AvatarPicker from '@/components/Student/StudentAvatarPicker/StudentAvatarPicker';
import TimeSlider from '@/components/TimeSlider/TimeSlider';
import ConnectedTemplate from '@/template/ConnectedTemplate';
import { UpdateStudentDto } from '@/types/student';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../components/Button/Button';

const StudentProfile = () => {
  const { id } = useParams();
  const { data: student } = useStudent(id);
  const { mutate: mutateStudent } = useUpdateStudent(id);

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState('');
  const [duration, setDuration] = useState(20);

  useEffect(() => {
    if (student) {
      setFirstname(student.firstname);
      setLastname(student.lastname);
      setEmail(student.username);
      setAvatar(student.avatar);
      setDuration(student.duration ?? 20);
    }
  }, [student]);

  const handleUpdate = async () => {
    if (!student || !id) return;

    const changes: UpdateStudentDto = {};

    if (firstname !== student.firstname) changes.firstname = firstname;
    if (lastname !== student.lastname) changes.lastname = lastname;
    if (email !== student.username) changes.username = email;
    if (avatar !== student.avatar) changes.avatar = avatar;
    if (duration !== student.duration) changes.duration = duration;
    if (password.trim() !== '') changes.password = password;

    if (Object.keys(changes).length === 0) {
      return;
    }

    mutateStudent(changes);
  };

  return (
    <ConnectedTemplate
      headerContent={
        <div className='flex flex-col items-center'>
          <img
            src={
              student && student.avatar
                ? `/avatars/${student.avatar}`
                : '/avatars/wizard.png'
            }
            alt="photo de l'avatar"
            className='w-[80px] h-[80px]'
          />
          <h2 className='text-h1 text-[var(--foreground-secondary)]'>
            {student?.firstname}
          </h2>
        </div>
      }
      isTutor
    >
      <div className='flex flex-col items-center gap-4'>
        <div className='flex flex-col items-center justify-center gap-4 lg:flex-row'>
          <Panel className='max-w-fit'>
            <AvatarPicker
              selectedAvatar={avatar}
              onAvatarSelect={setAvatar}
              className='mx-auto'
            />
            <EditableField
              icon={<Profile className='w-[30px] h-[30px]' />}
              label='Nom'
              value={firstname}
              onChange={setFirstname}
            />
            <EditableField
              icon={<Profile className='w-[30px] h-[30px]' />}
              label='Prénom'
              value={lastname}
              onChange={setLastname}
            />
            <EditableField
              icon={<Profile className='w-[30px] h-[30px]' />}
              label='Email'
              value={email}
              onChange={setEmail}
            />
            <EditableField
              icon={<Profile className='w-[30px] h-[30px]' />}
              label='Mot de passe'
              value={password}
              onChange={setPassword}
              isPassword
            />
            <div className='flex flex-col items-center gap-y-4'>
              <Button onClick={handleUpdate}>Sauvegarder</Button>
              <Button variant='link' className='p-0'>
                Supprimer l'enfant
              </Button>
            </div>
          </Panel>
          <div className='flex flex-col gap-4 items-end'>
            <Panel className='max-w-fit h-full'>
              <div className='flex flex-col gap-y-2'>
                <span>Progression</span>
                <ProgressBar progress={30} />
              </div>
              <div className='flex flex-col gap-y-2'>
                <TimeSlider value={duration} onChange={setDuration} />
              </div>
            </Panel>
            <Button>Démarrer la session</Button>
          </div>
        </div>
      </div>
    </ConnectedTemplate>
  );
};

export default StudentProfile;
