export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/verify") {
      return new Response(
        JSON.stringify({
          platform_name: "Demo App",
          metadata: {
            verified: "1"
          }
        }),
        {
          headers: { "Content-Type": "application/json" }
        }
      );
    }

    return new Response("OK");
  }
};
