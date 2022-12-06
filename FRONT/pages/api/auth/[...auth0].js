// import { handleAuth } from '@auth0/nextjs-auth0';
// export default handleAuth();
const URL_FRONT = process.env.NEXT_PUBLIC_URL_FRONT;

import { handleAuth, handleCallback, handleLogin } from '@auth0/nextjs-auth0';

const afterCallback = (req, res, session, state) => {
  session.user.TokenAuth0 = session.accessToken;  // Save AccessToken to Session
  delete session.refreshToken;
  return session;
};

export default handleAuth({
  async callback(req, res) {
    try {
      await handleCallback(req, res, { afterCallback });
    } catch (error) {
      res.status(error.status || 500).end(error.message);
    }
  },
  // async login(req, res) {
  //   await handleLogin(req, res, {
  //     audience: 'api-autenticacion-huellitas', 
  //     returnTo: `${URL_FRONT}/dashboard`,   // Redirects to /dashboard (after Login)
  //   });
  // },
});