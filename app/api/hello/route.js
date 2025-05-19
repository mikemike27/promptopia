export function GET() {
  console.log('Scheduled job ran!');
  return new Response('Hello from Vercel!');
}
