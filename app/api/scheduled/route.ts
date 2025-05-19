export const schedule = '*/5 * * * *'; // every 5 minutes

export const GET = async () => {
  console.log('Scheduled function running at', new Date().toISOString());
  return new Response(JSON.stringify({ message: 'Scheduled function executed' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
