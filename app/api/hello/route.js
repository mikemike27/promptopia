export const route = {
  schedule: '0 0 * * *', // schedule cron (daily midnight UTC)
};

export function GET() {
  console.log('Scheduled job ran!');
  return new Response('Hello from Vercel!');
}
