// import { handleAuth } from '@auth0/nextjs-auth0';
// export default handleAuth();

import { handleAuth, handleCallback } from '@auth0/nextjs-auth0';

const afterCallback = (req, res, session, state) => {
  session.user.Token = session.idToken; // Add token to user session
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
});