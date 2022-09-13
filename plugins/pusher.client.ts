import Pusher from 'pusher-js';

export default defineNuxtPlugin(() => {
  const pusher = new Pusher('key', {
    cluster: 'ap1',
    authorizer: ({ name }) => ({
      authorize: async (socketId, callback) => {
        const formData = new FormData();

        formData.append('socket_id', socketId);
        formData.append('channel_name', name);
        const authRes = await _fetchUtil('', {
          method: 'POST',
          body: formData,
          baseURL: 'api/gateway/auth/pusher',
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

  return {
    provide: {
      pusher,
    },
  };
});
