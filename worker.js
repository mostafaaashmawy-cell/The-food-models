export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    try {
      return await env.ASSETS.fetch(request);
    } catch (e) {
      return new Response("Not found", { status: 404 });
    }
  },
};
