import Pusher from 'pusher-js';

export const _pusher = new Pusher('key', {
  cluster: 'ap1',
  authorizer: ({ name }) => ({
    authorize: async (socketId, callback) => {
      const formData = new FormData();

      formData.append('socket_id', socketId);
      formData.append('channel_name', name);
      const authRes = await _fetchUtil<any>('', {
        method: 'POST',
        body: formData,
        baseURL: 'api/v1/gateway/auth/pusher',
      });

      callback(
        authRes?.status === 200
          ? (false as any)
          : { message: authRes?.message, name: authRes?.status },
        { auth: authRes?.data?.auth },
      );
    },
  }),
});
