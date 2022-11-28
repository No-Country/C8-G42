// pages/index.js
import { useUser } from '@auth0/nextjs-auth0';

export default function Index() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div>
        Welcome {user.name}! 
        <button><a href="/api/auth/logout">Logout</a></button>
      </div>
    );
  }

  return <button><a href="/api/auth/login">Login</a></button>;
}