import { useMutation } from '@tanstack/react-query';
import sendEmail from './api';
import { SendEmailDto } from './schema';

const useSendEmail = () => {
  return useMutation({
    mutationFn: (data: SendEmailDto) => sendEmail(data),
  });
};

export default useSendEmail;
