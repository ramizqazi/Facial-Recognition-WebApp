import { useMutation } from 'react-query';

import request from '../util/request';

/**
 * Add User
 */
export const useAddUser = () =>
  useMutation(async data => {
    const formData = new FormData();
    const image = await (await fetch(data.image)).blob();

    formData.append('name', data.name);
    formData.append('image', image);

    return request({
      url: 'add_image',
      method: 'POST',
      data: formData,
    });
  });
