import { d as db, L as Like } from './__DhysDYbJ.mjs';

const prerender = false;
const POST = async ({ request }) => {
  const { title } = await request.json();
  if (!title) {
    return new Response(null, {
      status: 404,
      statusText: "Not found"
    });
  }
  await db.insert(Like).values({ title });
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
};

export { POST, prerender };
