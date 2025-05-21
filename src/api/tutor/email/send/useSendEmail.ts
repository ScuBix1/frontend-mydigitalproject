import { useMutation } from '@tanstack/react-query';
import sendEmail from './api';
import { SendEmailDto } from './schema';

const useSendEmail = () => {
  return useMutation({
    mutationFn: async (data: SendEmailDto) => await sendEmail(data),
  });
};

export default useSendEmail;
