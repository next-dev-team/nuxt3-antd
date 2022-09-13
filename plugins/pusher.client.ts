import Pusher from 'pusher-js';

export default defineNuxtPlugin(() => {
  const pusher = new Pusher('2ed3f83182b8766af52b', {
    cluster: 'ap1',
    authorizer: ({ name }) => ({
      authorize: async (socketId, callback) => {
        const formData = new FormData();

        formData.append('socket_id', socketId);
        formData.append('channel_name', name);
        const authRes = await _fetchUtil('', {
          method: 'POST',
          body: formData,
          baseURL: 'https://api-dev.umpay.io/api/v1/gateway/auth/pusher',
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
