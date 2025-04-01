import { fetchRoleRights } from '@/features/roles/lib/api';
import { queryKeys } from '@/lib/query-keys';
import { Right, RightType } from '@/lib/types';
import { useQuery } from '@tanstack/react-query';

export const useRoleRights = (roleRightType?: RightType) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [queryKeys.roleRights, roleRightType],
    queryFn: () => fetchRoleRights(roleRightType),
    // Stale time is 1 hour - since rights are not expected to change often.
    staleTime: 1000 * 60 * 60,
  });

  const rights: Right[] = data ?? [];

  return { rights, isLoading, isError };
};
