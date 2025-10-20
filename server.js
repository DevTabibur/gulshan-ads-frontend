// server.js
import { createServer } from "http";
import { parse } from "url";
import next from "next";

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    createServer((req, res) => {
        try {
            const parsedUrl = parse(req.url, true);
             const { pathname } = parsedUrl; // ✅ এটা যোগ করো
            // ✅ Ensure _next static files served properly
            if (pathname.startsWith("/_next") || pathname.startsWith("/static")) {
                handle(req, res, parsedUrl);
                return;
            }
            handle(req, res, parsedUrl);
        } catch (err) {
            console.error("Server error:", err);
            res.statusCode = 500;
            res.end("Internal Server Error");
        }
    }).listen(port, () => {
        console.log(`> ✅ Project is running on http://localhost:${port}`);
    });
});
