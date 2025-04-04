import { Separator } from '@/components/ui/separator';
import { Typography } from '@/components/ui/typography';
import { CreateUserBreadcrumbs } from '@/features/users/components/create-user-breadcrumbs';
import { UserForm } from '@/features/users/components/user-form';
import { createUser } from '@/features/users/lib/api';
import { BaseUserFormData } from '@/features/users/lib/schemas';
import { queryKeys } from '@/lib/query-keys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { AxiosError } from 'axios';
import { User } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';

export const Route = createFileRoute('/(app)/_app/users/create')({
  component: CreateUserPage,
});

function CreateUserPage() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { t } = useTranslation('translation', {
    keyPrefix: 'app.Users',
  });

  const mutation = useMutation({
    mutationFn: (data: BaseUserFormData) => createUser(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.users] });

      toast.success(t('createUserSuccess'));
      navigate({ to: '/users' });
    },
    onError: (error) => {
      const axiosError = error as AxiosError;
      const axiosResponseData = axiosError.response?.data as {
        messageKey: string;
        message: string;
      };

      if (axiosError.status === 400 && axiosResponseData?.messageKey) {
        toast.error(t(axiosResponseData.messageKey));
      } else {
        toast.error(t('createUserError'));
      }
    },
  });

  const handleSubmit = async (data: BaseUserFormData) => {
    await mutation.mutateAsync(data);
  };

  return (
    <>
      <title> OpenLMIS - Create User </title>

      <div className='p-3 md:p-4 flex flex-row items-center justify-start gap-2'>
        <div className='size-8 flex justify-center items-center rounded-md bg-gradient-to-br from-accent/60 to-accent'>
          <User size={18} />
        </div>
        <Typography.H1>{t('createUserPageTitle')}</Typography.H1>
      </div>
      <Separator />
      <CreateUserBreadcrumbs />
      <Separator />
      <div className='flex flex-col gap-4 p-2 md:p-4'>
        <UserForm
          mode='create'
          onSubmit={handleSubmit}
          isSubmitting={mutation.isPending}
        />
      </div>
    </>
  );
}
