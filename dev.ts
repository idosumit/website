import { join } from "path";
import { statSync } from "fs";

const server = Bun.serve({
  port: 3000,
  async fetch(req) {
    const url = new URL(req.url);
    let pathname = url.pathname;
    
    // Handle static assets in src/assets
    if (pathname.startsWith('/src/assets/')) {
      const filePath = join(process.cwd(), pathname);
      try {
        const stat = statSync(filePath);
        if (stat.isFile()) {
          const file = Bun.file(filePath);
          // Set appropriate content type for images
          const headers = new Headers();
          if (pathname.endsWith('.png')) {
            headers.set('Content-Type', 'image/png');
          }
          return new Response(file, { headers });
        }
      } catch (e) {
        console.error('Error serving asset:', e);
      }
    }

    // Serve index.html for root path
    if (pathname === "/") {
      pathname = "/index.html";
    }

    try {
      if (pathname.endsWith('.tsx')) {
        // For TSX files, we need to transpile them
        const filePath = join(process.cwd(), pathname);
        const content = await Bun.file(filePath).text();
        const result = await Bun.build({
          entrypoints: [filePath],
          target: 'browser',
        });
        
        return new Response(result.outputs[0], {
          headers: {
            'Content-Type': 'application/javascript',
          },
        });
      }

      // Try to serve from src directory first
      let filePath = join(process.cwd(), 'src', pathname);
      try {
        const stat = statSync(filePath);
        if (stat.isFile()) {
          const file = Bun.file(filePath);
          return new Response(file);
        }
      } catch {}

      // If not found in src, try the root directory
      filePath = join(process.cwd(), pathname);
      try {
        const stat = statSync(filePath);
        if (stat.isFile()) {
          const file = Bun.file(filePath);
          return new Response(file);
        }
      } catch {}

      // For client-side routing or if file not found, return index.html
      const indexHtml = Bun.file(join(process.cwd(), "index.html"));
      return new Response(indexHtml);
      
    } catch (e) {
      console.error('Error serving request:', e);
      return new Response("Server Error", { status: 500 });
    }
  },
});

console.log(`Listening on http://localhost:${server.port}`); 