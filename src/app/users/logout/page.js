'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    const logoutUser = async () => {
      try {
        // Clear the token from localStorage
        localStorage.removeItem('token');

        // Optionally call the logout API to invalidate the session
        const response = await fetch('/api/auth/logout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) {
          console.error('Failed to notify server about logout.');
        }

        // Redirect the user to the login page
        router.push('/users/login');
      } catch (error) {
        console.error('Error during logout:', error);
        router.push('/users/login'); // Redirect even if the logout API fails
      }
    };

    logoutUser();
  }, [router]);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Logging out...</h1>
    </div>
  );
}
