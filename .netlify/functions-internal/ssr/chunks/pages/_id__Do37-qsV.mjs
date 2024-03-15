import { d as db, L as Like } from './__PYyiENbz.mjs';
import { sql, eq } from '@astrojs/db/dist/runtime/config.js';

const prerender = false;
const POST = async ({ params, request }) => {
  const id = params.id;
  if (!id) {
    return new Response(null, {
      status: 404,
      statusText: "Not found"
    });
  }
  const req = await db.update(Like).set({ likes: sql`${Like.likes} + 1` }).where(eq(Like.id, id));
  if (!req.rowsAffected) {
    await db.insert(Like).values({
      id,
      likes: 1
    });
  }
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
};

export { POST, prerender };
