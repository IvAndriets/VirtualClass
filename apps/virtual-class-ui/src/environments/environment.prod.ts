export const environment = {
  production: true,
  api_url: 'http://localhost:8000/',
  authSettings: {
    authority: 'http://127.0.0.1:18080/',
    client_id: 'virtual-class',
    redirect_uri: 'http://localhost:4200/authcallback',
    post_logout_redirect_uri: 'http://localhost:4200/postlogout',
  },
};
