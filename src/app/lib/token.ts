import crypto from 'crypto';

const SECRET = process.env.NEXT_PUBLIC_IFRAME_SECRET || '';

export function generateIframeToken(user: string): string {
  const timestamp = Math.floor(Date.now() / 1000); // seconds
  const data = `${user}:${timestamp}`;
  const hmac = crypto.createHmac('sha256', SECRET).update(data).digest('hex');
  return Buffer.from(`${user}:${timestamp}:${hmac}`).toString('base64');
}
