export default {
  fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/manifest.json") {
      return new Response(
        JSON.stringify({
          name: "Jumitech",
          short_name: "Jumitech",
          start_url: "/?source=pwa",
          display: "standalone",
          background_color: "#ffffff",
          theme_color: "#007bff",
          icons: [
            {
              src: "https://iili.io/fwTUCnS.png",
              sizes: "192x192",
              type: "image/png"
            },
            {
              src: "https://iili.io/fwTg4dg.png",
              sizes: "512x512",
              type: "image/png"
            }
          ]
        }),
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }

    if (url.pathname === "/service-worker.js") {
      return new Response(
        `
        self.addEventListener('install', e => self.skipWaiting());
        self.addEventListener('fetch', e => {});
        `,
        {
          headers: {
            "Content-Type": "application/javascript"
          }
        }
      );
    }

    return fetch(request);
  }
};
