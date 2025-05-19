export const config = {
  schedule: '0 0 * * *',
};

export function GET(request) {
  console.log("hello world dada");
  return new Response('Hello from Vercel!');
}