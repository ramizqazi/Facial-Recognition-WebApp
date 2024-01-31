import { useQuery } from 'react-query';

import request from '../util/request';

/**
 * Get HCP user
 */
export const useGetHcpUser = (enabled, successCallback, errorCallback) => useQuery(queryKeys.hcpUser(), async () => {
  const payload = await request({
    url: 'hcp/account',
    method: 'GET',
  });

  return payload.data?.user;
}, {
  onSuccess: (payload) => {
    if (typeof successCallback === 'function') {
      successCallback(payload);
    }
  },
  onError: (error) => {
    if (typeof errorCallback === 'function') {
      errorCallback(error);
    }
  },
  enabled,
});