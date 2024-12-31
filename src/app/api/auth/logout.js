export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }
  
    try {
      // Invalidate session or clear tokens (for token-based authentication)
      res.setHeader('Set-Cookie', [
        'token=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT',
      ]);
  
      return res.status(200).json({ message: 'Logout successful.' });
    } catch (error) {
      console.error('Logout error:', error);
      return res.status(500).json({ error: 'Internal server error.' });
    }
  }
  