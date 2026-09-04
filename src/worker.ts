import { Hono } from "hono";

type Env = {
  ASSETS: {
    fetch: (request: Request) => Promise<Response>;
  };
};

const app = new Hono<{ Bindings: Env }>();

app.get("/health", (c) => c.text("A, Ok", 200));

// Everything that isn't an API route falls through to the static Astro build.
app.all("*", (c) => c.env.ASSETS.fetch(c.req.raw));

export default app;
