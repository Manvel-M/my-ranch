import { RESEND_API_KEY } from "astro:env/server";

export function GET() {
  return new Response(
    JSON.stringify({
      RESEND_API_KEY: typeof RESEND_API_KEY,
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
}
