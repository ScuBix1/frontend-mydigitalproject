import { useTutor } from '@/api/tutor/getTutor/useTutor';
import { useUpdateTutor } from '@/api/tutor/updateTutor/useUpdateTutor';
import Avatar from '@/components/Avatar/Avatar';
import Button from '@/components/Button/Button';
import EditableField from '@/components/EditableField/EditableField';
import Panel from '@/components/Panel/Panel';
import { useAuthContext } from '@/context/auth/useAuthContext';
import ConnectedTemplate from '@/template/ConnectedTemplate';
import { useEffect, useState } from 'react';

const TutorProfile = () => {
  const { user } = useAuthContext();
  const { data: tutor } = useTutor();
  const { mutate: mutateTutor } = useUpdateTutor(user?.id);

  const [firstname, setFirstname] = useState(tutor?.firstname || '');
  const [lastname, setLastname] = useState(tutor?.lastname || '');
  const [email, setEmail] = useState(tutor?.email || '');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (tutor) {
      setFirstname(tutor.firstname);
      setLastname(tutor.lastname);
      setEmail(tutor.email);
    }
  }, [tutor]);

  const handleSubmit = async () => {
    if (!tutor) return;

    const changes: UpdateTutorDto = {};

    if (firstname !== tutor.firstname) changes.firstname = firstname;
    if (lastname !== tutor.lastname) changes.lastname = lastname;
    if (email !== tutor.email) changes.email = email;
    if (password.trim() !== '') changes.password = password;

    if (Object.keys(changes).length === 0) {
      return;
    }

    await mutateTutor(changes);
  };

  return (
    <ConnectedTemplate
      headerContent={
        <h2 className='text-h1 text-[var(--foreground-secondary)]'>
          {tutor?.firstname ?? ''}
        </h2>
      }
      isTutor
    >
      <div className='flex flex-col items-center gap-y-4'>
        <Avatar
          firstname={firstname}
          lastname={lastname}
          className='w-[80px] h-[80px]'
        />
        <Panel className='max-w-fit'>
          <EditableField
            icon={
              <img
                src='/assets/images/human-head-icon.png'
                alt='Icon tête humaine'
                className='w-[30px] h-[30px]'
              />
            }
            label='Prénom'
            value={firstname}
            onChange={setFirstname}
          />
          <EditableField
            icon={
              <img
                src='/assets/images/human-head-icon.png'
                alt='Icone tête humaine'
                className='w-[30px] h-[30px]'
              />
            }
            label='Nom'
            value={lastname}
            onChange={setLastname}
          />
          <EditableField
            icon={
              <img
                src='/assets/images/email-icon.png'
                alt='Icone enveloppe'
                className='w-[30px] h-[30px]'
              />
            }
            label='Email'
            value={email}
            onChange={setEmail}
          />
          <EditableField
            icon={
              <img
                src='/assets/images/lock-icon.png'
                alt='Icone cadenas'
                className='w-[30px] h-[30px]'
              />
            }
            label='Mot de passe'
            value={password}
            onChange={setPassword}
            isPassword
          />
        </Panel>
        <Button onClick={handleSubmit}>Sauvegarder</Button>
      </div>
    </ConnectedTemplate>
  );
};

export default TutorProfile;
