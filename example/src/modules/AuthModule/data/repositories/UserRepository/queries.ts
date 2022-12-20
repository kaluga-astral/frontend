import { UseQueryOptions, useQuery } from '@example/shared';

import { userRepository } from './UserRepository';
import { UserPersonDTO } from './dto';

export const useUserInfoQuery = (options?: UseQueryOptions<UserPersonDTO>) =>
  useQuery<UserPersonDTO>(
    userRepository.fullInfoCacheKey,
    userRepository.getPersonInfo,
    options,
  );
